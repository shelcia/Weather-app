import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const CountryPage = ({ match }) => {
  const [darkTheme] = useContext(ThemeContext);

  const [country, setCountry] = useState([]);
  const countryName = match.params.id.replace(/-/g, " ");

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const results = await fetch(
          `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
        );
        const response = await results.json();
        setCountry(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCountryDetails();
  }, [countryName]);

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
          {country.map((country) => (
            <React.Fragment key={country.alpha2Code}>
              <div className="text-center">
                <img
                  src={country.flag}
                  alt=""
                  className="img-fluid mb-3 shadow-sm w-50"
                />
                <h2
                  className={darkTheme ? "text-light mb-3" : "text-dark mb-3"}
                >
                  {country.name}
                </h2>
                <table
                  className={
                    darkTheme
                      ? "table table-dark table-striped table-hover w-75 mx-auto shadow mb-5"
                      : "table table-hover table-striped w-75 mx-auto shadow-sm mb-5"
                  }
                >
                  <tbody>
                    <tr>
                      <th>Population</th>
                      <td>{country.population} people</td>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <td>{country.region} </td>
                    </tr>
                    <tr>
                      <th>Capital </th>
                      <td>{country.capital}</td>
                    </tr>
                    <tr>
                      <th>Area </th>
                      <td>{country.area}</td>
                    </tr>
                    <tr>
                      <th>Native Name </th>
                      <td>{country.nativeName}</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="text-info">
                        Currencies
                      </th>
                    </tr>
                    {country.currencies.map((currency) => (
                      <React.Fragment key={country.name}>
                        <tr>
                          <th>Symbol</th>
                          <td>{currency.symbol}</td>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <td>{currency.name}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-info">Show Weather Details</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
