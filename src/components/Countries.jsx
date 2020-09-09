import React from "react";

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
    <div className="card bg-dark mb-4 text-center">
      <img src={flag} alt="" width="100px" height="auto" className="mb-2"></img>
      <h5>{name}</h5>
      <p>{population}</p>
      <p>{region}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          showModal(alpha2Code, capital, area, nativeName, cioc, subregion);
        }}
        className="btn btn-info"
      >
        Know More
      </button>
    </div>
  );
};

export default Country;
