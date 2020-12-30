import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CountryContext } from "./CountryContext";
import { ThemeContext } from "./ThemeContext";

const HomePage = () => {
  const [countries, setCountries] = useContext(CountryContext);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [darkTheme] = useContext(ThemeContext);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const result = await response.json();
        // console.log(result);
        setCountries(result);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, [setCountries]);

  useEffect(() => {
    const searchQuery = () => {
      if (query === "") {
        setFilteredResults([]);
        return;
      }

      const countryNamesAndCapitals = [];
  
      countries.forEach(function (country) {
          countryNamesAndCapitals.push(country.name);
          countryNamesAndCapitals.push(country.capital);    
      });
       
      // console.log(countryNamesAndCapitals)

      const filteredtResults = countryNamesAndCapitals.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) === 0
      );
      console.log(filteredtResults);
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
          <form className="input-group">
            <input
              type="search"
              className={
                darkTheme
                  ? "form-control rounded-0 pl-0 text-light"
                  : "form-control rounded-0 pl-0"
              }
              placeholder="Search any Country or Capital name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
          <div className="list-group shadow-lg">
            {filteredResults.map((result) => (
              <NavLink
                to={result.replace(/\s+/g, "-").toLowerCase()}
                key={result}
                className={
                  darkTheme
                    ? "list-group-item list-group-item-action text-light bg-dark"
                    : "list-group-item list-group-item-action"
                }
              >
                <span style={{ color: "#17a2b8" }} className="font-weight-bold">
                  {query}
                </span>
                {result.substring(query.length)}
              </NavLink>
            ))}
          </div>
          <div className="card-columns mt-5">
            {countries.map((country) => (
              <NavLink
                className={
                  darkTheme
                    ? "card shadow bg-dark rounded-lg p-0"
                    : "card shadow-sm bg-light rounded-lg p-0"
                }
                key={country.alpha2Code}
                style={{
                  background: `url(${country.flag})`,
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                to={country.name.replace(/\s+/g, "-").toLowerCase()}
              >
                <div
                  className="w-100 rounded-lg d-flex align-items-center pointer justify-content-center text-center"
                  style={{
                    backgroundColor: darkTheme
                      ? "#00000060"
                      : "rgb(0,0,0,0.15)",
                    height: "150px",
                    backgroundImage:
                      !darkTheme &&
                      "linear-gradient(to bottom, rgb(0, 0, 0, .05) 0%, rgb(0,0,0,.21) 40%, rgb(0,0,0,.21) 60%, rgb(0, 0, 0, 0.05) 100%)",
                  }}
                >
                  <h2
                    className={darkTheme && "text-light font"}
                    style={{
                      zIndex: 10,
                      color: "rgb(255,255,255, .93)",
                      fontWeight: 550,
                    }}
                  >
                    {country.name}
                  </h2>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
