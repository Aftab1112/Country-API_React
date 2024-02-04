import React from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const array = countriesData.map((country) => {
    return (
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital ? country.capital : "No Capital"}
        key={country.name.common}
      />
    );
  });
  return <div className="countries-container">{array}</div>;
}
