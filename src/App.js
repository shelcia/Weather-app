import React, { useEffect, useState } from "react";
import "./App.css";
import Country from "./country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCountry();
  }, [query]);
  const getCountry = async () => {
    let response;
    if (query === "") {
      response = await fetch("https://restcountries.eu/rest/v2/all");
    } else {
      response = await fetch("https://restcountries.eu/rest/v2/name/" + query);
    }
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };
  const updateState = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <div className="col-sm-4 mx-auto border">
        <form className="form-inline " onSubmit={getSearch}>
          <input
            className="form-control"
            type="search"
            value={search}
            onChange={updateState}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>

      <br></br>
      {countries.map(country => (
        <Country
          key={country.alpha2Code}
          name={country.name}
          population={country.population}
          region={country.region}
          flag={country.flag}
        />
      ))}
    </div>
  );
};

export default App;

// const REQ = "https://restcountries.eu/rest/v2/all";
// useEffect(() => {
//   console.log("i am running bitch");
// }, []); //add an empty array to make it run only once you can also put in some arguments
// const [counter, setCounter] = useState(0);
