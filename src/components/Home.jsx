import React from "react";
import Country from "./Countries";

const Home = ({ currentCountries }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {currentCountries.map((country) => (
            <Country
              key={country.alpha2Code}
              name={country.name}
              population={country.population}
              region={country.region}
              flag={country.flag}
              alpha2Code={country.alpha2Code}
              capital={country.capital}
              area={country.area}
              nativeName={country.nativeName}
              cioc={country.cioc}
              subregion={country.subregion}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
