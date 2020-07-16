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
    <div>
      <img src={flag} alt="" width="100px" height="auto"></img>
      <h1>{name}</h1>
      <p>{population}</p>
      <p>{region}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          showModal(alpha2Code, capital, area, nativeName, cioc, subregion);
        }}
      >
        Know More
      </button>
    </div>
  );
};

export default Country;
