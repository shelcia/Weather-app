import React from "react";

const Modal = ({
  hideModal,
  show,
  alpha2Code,
  capital,
  area,
  nativeName,
  cioc,
  subregion,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <table>
        <tbody>
          <tr>
            <td>Alpha2Code:</td>
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
      <button className="btn btn-primary mt-3" onClick={hideModal}>
        Close
      </button>
    </div>
  );
};

export default Modal;
