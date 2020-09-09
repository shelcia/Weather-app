import React from "react";
import Modal from "./Modal";

const Country = ({
  name,
  population,
  region,
  flag,
  showModal,
  alpha2Code,
  capital,
  area,
  nativeName,
  cioc,
  subregion,
}) => {
  return (
    <React.Fragment>
      <div className="card bg-dark mb-4 text-center">
        <img
          src={flag}
          alt=""
          width="100px"
          height="auto"
          className="mb-2"
        ></img>
        <h5>{name}</h5>
        <p>{population}</p>
        <p>{region}</p>
        <button
          type="button"
          data-toggle="modal"
          data-target={`#modal${alpha2Code}`}
          className="btn btn-info"
        >
          Know More
        </button>
      </div>
      <Modal alpha2Code={alpha2Code}>
        {
          <table className="table table-dark table-striped">
            <tbody>
              <tr>
                <th>Alpha2Code:</th>
                <td>{alpha2Code}</td>
              </tr>
              <tr>
                <th>Capital: </th>
                <td>{capital}</td>
              </tr>
              <tr>
                <th>Area: </th>
                <td>{area}</td>
              </tr>
              <tr>
                <th>Native Name: </th>
                <td>{nativeName}</td>
              </tr>
              <tr>
                <th>Cioc: </th>
                <td>{cioc}</td>
              </tr>
              <tr>
                <th>Subregion: </th>
                <td>{subregion}</td>
              </tr>
            </tbody>
          </table>
        }
      </Modal>
    </React.Fragment>
  );
};

export default Country;
