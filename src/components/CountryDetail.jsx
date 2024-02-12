import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { themeContext } from "../contexts/ThemeContext";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useContext(themeContext);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const [country] = await response.json();
        setCountryData({
          flag: country.flags.svg,
          name: country.name.common,
          nativeName: Object.values(country.name.nativeName)[0].common,
          population: country.population,
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital.join(", "),
          topLevelDomain: country.tld.join(", "),
          currencies: Object.values(country.currencies)
            .map((currencies) => currencies.name)
            .join(", "),
          languages: Object.values(country.languages).join(", "),
          borders: [],
        });

        if (!country.borders) {
          country.borders = [];
        }
        // eslint-disable-next-line
        country.borders.map((border) => {
          async function borderCountriesAll() {
            const response = await fetch(
              `https://restcountries.com/v3.1/alpha/${border}`
            );
            const [borderCountry] = await response.json();
            setCountryData((prevState) => ({
              ...prevState,
              borders: [...prevState.borders, borderCountry.name.common],
            }));
          }
          borderCountriesAll();
        });
      } catch (error) {
        setNotFound(true);
      }
    }

    fetchCountry();
  }, [countryName]);

  if (notFound) {
    return <div> Country Not Found</div>;
  }
  return countryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1 className="country-name">{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}{" "}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevelDomain} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries : </b>
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
