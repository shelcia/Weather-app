import React from "react";

const Weather = ({ darkTheme, data }) => {
  const weatherConditions = [
    {
      label: "Feels like",
      value: `${data.main.feels_like}`,
    },
    {
      label: "Humidity",
      value: `${data?.main?.humidity}`,
    },
    {
      label: "Pressure",
      value: `${data?.main?.pressure} atm`,
    },
    {
      label: "Temperature",
      value: `${data?.main?.temp}`,
    },
    {
      label: "Maximum Temperature",
      value: `${data?.main?.temp_max}`,
    },
    {
      label: "Minimum Temperature",
      value: `${data?.main?.temp_min}`,
    },
  ];
  return (
    <React.Fragment>
      <div className="alert alert-info mx-auto alert-dismissible">
        <strong>Note:</strong> Weather results are based on country's capital(
        {data.name})
      </div>
      <table
        className={
          darkTheme
            ? "table table-dark table-hover mx-auto mb-5"
            : "table table-hover mx-auto mb-5"
        }
      >
        <thead>
          <tr>
            <th colSpan="2" className={darkTheme ? "text-light" : "text-dark"}>
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
            ? "table table-dark table-hover mx-auto mb-5"
            : "table table-hover mx-auto mb-5"
        }
      >
        <thead>
          <tr>
            <th colSpan="2" className={darkTheme ? "text-light" : "text-dark"}>
              Coordinates
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Longitude</th>
            <td>
              {data.coord.lon} <sup>o</sup>
            </td>
          </tr>
          <tr>
            <th>Lattitude</th>
            <td>
              {data.coord.lat} <sup>o</sup>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        className={
          darkTheme
            ? "table table-dark table-hover mx-auto mb-5"
            : "table table-hover mx-auto mb-5"
        }
      >
        <thead>
          <tr>
            <th colSpan="2" className={darkTheme ? "text-light" : "text-dark"}>
              Weather Conditions
            </th>
          </tr>
        </thead>
        <tbody>
          {weatherConditions.map((item) => (
            <tr key={item.label}>
              <th>{item.label}</th>
              {item.label === "Pressure" ? (
                <td>{item.value}</td>
              ) : (
                <td>
                  {item.value} <sup>o</sup>F
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <table
        className={
          darkTheme
            ? "table table-dark table-hover mx-auto mb-5"
            : "table table-hover mx-auto mb-5"
        }
      >
        <thead>
          <tr>
            <th colSpan="2" className={darkTheme ? "text-light" : "text-dark"}>
              Winds
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Degree</th>
            <td>
              {data.wind.deg} <sup>o</sup>
            </td>
          </tr>
          <tr>
            <th>Speed</th>
            <td> {data.wind.speed} m/s</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Weather;
