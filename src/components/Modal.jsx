import React from "react";
import { useState } from "react";

const Modal = ({ alpha2Code, children, capital }) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=700d4039e931b3be6633dd7e11e5f669`;
  let results;
  const getWeather = async (event) => {
    setIsOpen(true);
    event.preventDefault();
    try {
      let response = await fetch(API);
      results = await response.json();
      // console.log(results);
      setData(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data", data);
  return (
    <div className="modal fade" id={`modal${alpha2Code}`}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h4 className="modal-title">{capital}</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            {children}
            <br></br>
            {!isOpen && (
              <button
                type="button"
                onClick={(event) => getWeather(event)}
                className="btn btn-info"
              >
                Know about its Climate
              </button>
            )}
            {isOpen && (
              <React.Fragment>
                {loading && (
                  <React.Fragment>
                    <div className="spinner-grow text-info"></div>
                    <div className="spinner-grow text-warning"></div>
                    <div className="spinner-grow text-danger"></div>
                  </React.Fragment>
                )}

                {!loading &&
                  (typeof data.clouds === undefined ? (
                    <React.Fragment>No data available</React.Fragment>
                  ) : (
                    <React.Fragment>
                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2">Cloud Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Clouds</th>
                            <td>{data.clouds.all}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2">Coordinates</th>
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
                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2">Weather Conditions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Feels_like:</th>
                            <td>{data.main.feels_like} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Humidity</th>
                            <td>{data.main.humidity} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Pressure:</th>
                            <td>{data.main.pressure} atm</td>
                          </tr>
                          <tr>
                            <th>Temperature:</th>
                            <td>{data.main.temp} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Maximum Temperature</th>
                            <td>{data.main.temp_max} &#176;F</td>
                          </tr>
                          <tr>
                            <th>Minimum Temperature:</th>
                            <td>{data.main.temp_min} &#176;F</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2">Winds</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Degree:</th>
                            <td>{data.wind.deg} &#176;</td>
                          </tr>
                          <tr>
                            <th>Speed:</th>
                            <td> {data.wind.speed} m/s</td>
                          </tr>
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
              </React.Fragment>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
