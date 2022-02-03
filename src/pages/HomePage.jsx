import React, { useState, useEffect, useContext } from "react";
import CountryDisp from "../components/CountryDisp";
import SearchComp from "../components/SearchComp";
import { ThemeContext } from "../context/ThemeContext";
import CountriesData from "../data/countries.json";

const HomePage = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [darkTheme] = useContext(ThemeContext);

  const countries = CountriesData;

  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchQuery = () => {
      if (query === "") {
        setFilteredResults([]);
        return;
      }

      const countryNamesAndCapitals = [];

      countries.forEach(function (country) {
        countryNamesAndCapitals.push(country.name?.common);
      });

      const filteredtResults = countryNamesAndCapitals.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) === 0
      );
      setFilteredResults(filteredtResults.slice(0, 6));
    };
    searchQuery();
  }, [countries, query]);
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "container-fluid bg-dark" : "container-fluid bg-light"
        }
        style={{ height: "100vh" }}
      >
        <div
          className="container"
          style={{ paddingTop: "15vh", height: "100vh", overflowY: "scroll" }}
        >
          <SearchComp
            query={query}
            setQuery={setQuery}
            filteredResults={filteredResults}
            darkTheme={darkTheme}
          />
          <div className="row mt-5">
            {countries.map((country, index) => (
              <CountryDisp
                country={country}
                darkTheme={darkTheme}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
