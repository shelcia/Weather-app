import React from "react";

const country = ({ name, population, region, flag }) => {
  return (
    <div>
      <img src={flag} alt="" width="100px" height="auto"></img>
      <h1>{name}</h1>
      <p>{population}</p>
      <p>{region}</p>
    </div>
  );
};

export default country;
