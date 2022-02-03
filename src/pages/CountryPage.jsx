import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Weather from "../components/Weather";
import CountriesData from "../data/countries.json";
import { useParams } from "react-router-dom";

const CountryPage = ({ match }) => {
  const { id } = useParams();

  const countries = CountriesData;
  const country = countries.filter(
    (item) => item.name?.common?.replace(/\s+/g, "-").toLowerCase() === id
  );

  // console.log(country);

  const [darkTheme] = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [isMessage, setIsMessage] = useState(false);
  // const [countries] = useContext(CountryContext);
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

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherDetails = async (capital, event) => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      const results = await response.json();
      console.log(results);
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
            <React.Fragment key={country.fifa}>
              <div className="text-center">
                <img
                  src={country.flags?.png}
                  alt=""
                  className="img-fluid mb-3 shadow-sm W-50"
                />
                <h2
                  className={darkTheme ? "text-light mb-3" : "text-dark mb-3"}
                >
                  {country.name?.common}
                </h2>

                <button
                  className="btn btn-primary mb-4"
                  onClick={(event) =>
                    getWeatherDetails(country.capital[0], event)
                  }
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
                  </p>
                )}
                {!loading && <Weather darkTheme={darkTheme} data={data} />}
                <div className="text-center W-75 mx-auto">
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
                      ? "table table-dark table-hover mx-auto mb-5"
                      : "table table-hover mx-auto mb-5"
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
