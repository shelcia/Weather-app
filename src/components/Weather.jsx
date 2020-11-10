import React from "react";

const Weather = ({ darkTheme, data }) => {
  return (
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
  );
};

export default Weather;
