import React from "react";

const Weather = ({ darkTheme, data }) => {
  const weatherConditions = [
    {
      label: "Feels like",
      value: `${data.main.feels_like} °F`,
    },
    {
      label: "Humidity",
      value: `${data?.main?.humidity} °F`,
    },
    {
      label: "Pressure",
      value: `${data?.main?.pressure} atm`,
    },
    {
      label: "Temperature",
      value: `${data?.main?.temp} °F`,
    },
    {
      label: "Maximum Temperature",
      value: `${data?.main?.temp_max} °F`,
    },
    {
      label: "Minimum Temperature",
      value: `${data?.main?.temp_min} °F`,
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
              <td>{item.value}</td>
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
            <td>{data.wind.deg} &#176;</td>
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
