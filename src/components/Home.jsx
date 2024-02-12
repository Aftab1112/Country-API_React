import React, { useContext } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { themeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(themeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
