import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import CountriesData from "../data/countries.json";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [darkTheme] = useContext(ThemeContext);

  const countries = CountriesData;

  useEffect(() => {
    const searchQuery = () => {
      if (query === "") {
        setFilteredResults([]);
        return;
      }

      const countryNamesAndCapitals = [];

      countries.forEach(function (country) {
        countryNamesAndCapitals.push(country.name?.common);
        // countryNamesAndCapitals.push(country.capital);
      });

      // console.log(countryNamesAndCapitals)

      const filteredtResults = countryNamesAndCapitals.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) === 0
      );
      // console.log(filteredtResults);
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
          {/* <h5 className={darkTheme ? "text-white" : "text-dark"}>
            Rest Countries have made their API private. We are constructing our
            own API (which is more reliable) this time.
          </h5> */}

          <form className="input-group">
            <input
              type="search"
              className={
                darkTheme
                  ? "form-control rounded-0 pl-0 text-light"
                  : "form-control rounded-0 pl-0"
              }
              placeholder="Search any Country"
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
          <div className="list-group shadow-lg">
            {filteredResults.map((result, index) => (
              <NavLink
                to="/"
                // to={result?.common?.replace(/\s+/g, "-").toLowerCase()}
                // key={result?.common}
                key={index}
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
            {countries.map((country, index) => (
              <NavLink
                className={
                  darkTheme
                    ? "card shadow bg-dark rounded-lg p-0"
                    : "card shadow-sm bg-light rounded-lg p-0"
                }
                // key={country.alpha2Code}
                key={index}
                style={{
                  background: `url(${country.flags?.png})`,
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                // to="/"
                to={country.name?.common?.replace(/\s+/g, "-").toLowerCase()}
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
                    {country.name?.common}
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
