import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Weather from "./Weather";

const CountryPage = ({ match }) => {
  const [darkTheme] = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [isMessage, setIsMessage] = useState(false);
  const [data, setData] = useState({
    name: "",
    clouds: { all: "" },
    coord: { lon: "", lat: "" },
    main: {
      feels_like: "",
      humidity: "",
      pressure: "",
      temp: "",
      temp_max: "",
      temp_min: "",
    },
    wind: { speed: "", deg: "" },
  });
  //   console.log(data);

  const [country, setCountry] = useState([]);
  
  const capitalName = match.params.id.replace(/-/g, " ");

  const API_KEY = process.env.REACT_WEATHER_APIKEY;

  const getWeatherDetails = async (capital, event) => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`;

    try {
      const response = await fetch(API);
      const results = await response.json();
      console.log(results);
      console.log("1");
      if (results.cod === "400" || results.cod === "404") {
        setIsMessage(true);
        return;
      }
      setData(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const results = await fetch(
          `https://restcountries.eu/rest/v2/capital/${capitalName}?fullText=true`
        );
        const response = await results.json();
        setCountry(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCountryDetails();
  }, [capitalName]);

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

                <button
                  className="btn btn-info mb-4"
                  onClick={(event) => getWeatherDetails(country.capital, event)}
                >
                  Show Weather Details
                  
                </button>
                {isMessage && (
                  <p
                    className={darkTheme ? "text-light mb-3" : "text-dark mb-3"}
                  >
                    Unfortunately no data is available{" "}
                    <span role="img" aria-label="emoji">
                      🥺🥺🥺
                    </span>
                    .
                  </p>
                )}
                {!loading && <Weather darkTheme={darkTheme} data={data} />}
                <div className="text-center w-75 mx-auto">
                  <h2
                    className={
                      darkTheme ? "text-light mt-4 mb-1" : "text-dark mt-4 mb-1"
                    }
                  >
                    More Details about the Country
                  </h2>
                  <hr className="mb-4"></hr>
                </div>
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
                      <td>
                        {country.area} km <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <th>Native Name </th>
                      <td>{country.nativeName}</td>
                    </tr>
                  </tbody>
                </table>
                <table
                  className={
                    darkTheme
                      ? "table table-dark table-striped table-hover w-75 mx-auto shadow mb-5"
                      : "table table-hover table-striped w-75 mx-auto shadow-sm mb-5"
                  }
                >
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-info">
                        Currencies used in the Country
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.currencies.map((currency) => (
                      <tr key={currency.name}>
                        <th>Name(Symbol)</th>
                        <td>
                          {currency.name}({currency.symbol})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table
                  className={
                    darkTheme
                      ? "table table-dark table-striped table-hover w-75 mx-auto shadow mb-5"
                      : "table table-hover table-striped w-75 mx-auto shadow-sm mb-5"
                  }
                >
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-info">
                        Languages Spoken
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.languages.map((language) => (
                      <tr key={language.name}>
                        <th>Name(Native Name)</th>
                        <td>
                          {language.name}({language.nativeName})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
