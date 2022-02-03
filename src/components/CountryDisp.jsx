import React from "react";
import { NavLink } from "react-router-dom";

const CountryDisp = ({ country, darkTheme }) => {
  const cardClass =
    "card w-100 rounded-lg d-flex align-items-center pointer justify-content-center text-center rounded-3 text-decoration-none";
  return (
    <div className="col-md-4 p-2 mb-2 ">
      <NavLink
        className={
          darkTheme
            ? `card shadow bg-dark ${cardClass}`
            : `card bg-light ${cardClass}`
        }
        to={country.name?.common?.replace(/\s+/g, "-").toLowerCase()}
      >
        <h2
          className={darkTheme ? "text-light" : "text-dark"}
          style={{
            zIndex: 10,
            fontWeight: 550,
          }}
        >
          {country.name?.common}
        </h2>
        <img
          src={country.flags?.png}
          alt=""
          width="60px"
          style={{
            height: 40,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </NavLink>
    </div>
  );
};

export default CountryDisp;
