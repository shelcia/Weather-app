import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const CountryPage = ({ match }) => {
  const [darkTheme] = useContext(ThemeContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [country, setCountry] = useState([]);
  const countryName = match.params.id.replace(/-/g, " ");

  const getWeatherDetails = async (capital, event) => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=700d4039e931b3be6633dd7e11e5f669`;
    try {
      const response = await fetch(API);
      const results = await response.json();
      console.log(results);
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
                <button
                  className="btn btn-info mb-4"
                  onClick={(event) => getWeatherDetails(country.capital, event)}
                >
                  Show Weather Details
                </button>
                {!loading &&
                  (typeof data.clouds === undefined ? (
                    <React.Fragment>No data available</React.Fragment>
                  ) : (
                    <React.Fragment>
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
                              Cloud Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Clouds</th>
                            <td>{data.clouds.all}</td>
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
                              Coordinates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Longitude</th>
                            <td>{data.coord.lon}&#176;</td>
                          </tr>
                          <tr>
                            <th>Lattitude</th>
                            <td>{data.coord.lat} &#176;</td>
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
                              Weather Conditions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Feels like</th>
                            <td>{data.main.feels_like} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Humidity</th>
                            <td>{data.main.humidity} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Pressure</th>
                            <td>{data.main.pressure} atm</td>
                          </tr>
                          <tr>
                            <th>Temperature</th>
                            <td>{data.main.temp} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Maximum Temperature</th>
                            <td>{data.main.temp_max} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Minimum Temperature</th>
                            <td>{data.main.temp_min} &#176;F</td>
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
                              Winds
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Degree</th>
                            <td>{data.wind.deg} &#176;</td>
                          </tr>
                          <tr>
                            <th>Speed</th>
                            <td> {data.wind.speed} m/s</td>
                          </tr>
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                <h2
                  className={
                    darkTheme ? "text-light mt-4 mb-1" : "text-dark mt-4 mb-1"
                  }
                >
                  More Details about the Country
                </h2>
                <hr className="mb-4"></hr>
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
                      <React.Fragment key={currency.name}>
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
                      <React.Fragment key={language.name}>
                        <tr>
                          <th>Name</th>
                          <td>{language.name}</td>
                        </tr>
                        <tr>
                          <th>Native Name</th>
                          <td>{language.nativeName}</td>
                        </tr>
                      </React.Fragment>
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
