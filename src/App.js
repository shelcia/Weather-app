import React, { useEffect, useState } from "react";
import "./styles/style.css";
import Country from "./components/Countries";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [state, setState] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);

  useEffect(() => {
    getCountry();
    setCurrentPage(1);
  }, [query]);

  //Methods for Modal display
  const showModal = () => {
    setState(true);
  };
  const hideModal = () => {
    setState(false);
  };
  //Get REST API
  const getCountry = async () => {
    let response;
    try {
      if (query === "") {
        response = await (
          await fetch("https://restcountries.eu/rest/v2/all")
        ).json();
        console.log(response);
      } else {
        response = await (
          await fetch("https://restcountries.eu/rest/v2/name/" + query)
        ).json();
        console.log(response);
      }
      const data = await response;
      setCountries(data);
    } catch (error) {
      console.log(error);
      setCountries([{ name: "Page not found" }]);
    }
  };
  const updateState = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  //Pagination req.

  // Pagination variables
  const indexOfLastCountry = currentPage * perPage;
  const indexOfFirstCountry = indexOfLastCountry - perPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  //Pagination method
  const Paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const changePage = (val) => {
    if (val === 0) {
      setCurrentPage(currentPage - 1);
    } else if (val === 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <React.Fragment>
      <nav>
        <form onSubmit={getSearch}>
          <input type="search" value={search} onChange={updateState} />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="container">
        <div className="grid">
          {currentCountries.map((country) => (
            <Country
              showModal={showModal}
              key={country.alpha2Code}
              name={country.name}
              population={country.population}
              region={country.region}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
      <div class="page-container">
        <Pagination
          perPage={perPage}
          totalPosts={countries.length}
          currentPage={currentPage}
          Paginate={Paginate}
          changePage={changePage}
        />
      </div>
      {countries.map((country) => (
        <Modal
          show={state}
          hideModal={hideModal}
          key={country.alpha2Code}
          alpha2Code={country.alpha2Code}
          capital={country.capital}
          area={country.area}
          nativeName={country.nativeName}
          cioc={country.cioc}
          subregion={country.subregion}
        />
      ))}
    </React.Fragment>
  );
};

export default App;
