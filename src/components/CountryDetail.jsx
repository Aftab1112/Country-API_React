import React, { useEffect, useState } from "react";
import "./CountryDetail.css";

export default function CountryDetail() {
  const countryName = new URLSearchParams(window.location.search).get("name");

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      const [country] = await response.json();
      console.log(country);
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
      });
    }
    fetchCountry();
  }, []);
  return countryData === null ? (
    "loading..."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button">
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
            <div className="border-countries">
              <b>Border Countries : </b>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
