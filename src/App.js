import React, { useEffect, useState } from "react";
import "./styles/style.css";
import Country from "./components/Countries";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { LoadCountries } from "./components/actions";

const App = () => {
  const countries = useSelector((state) => state.countries);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [state, setState] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountry();
    setCurrentPage(1);
  }, [query]);

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
        if (response.status === 404) {
          console.log("in if");
          response = await (
            await fetch(" https://restcountries.eu/rest/v2/capital/" + query)
          ).json();
          console.log(response);
          if (response.status === 404) {
            console.log("in if");
            response = await (
              await fetch(" https://restcountries.eu/rest/v2/lang/" + query)
            ).json();
            console.log(response);
          }

          if (response.status === 404) {
            console.log("in if");
            response = await (
              await fetch(
                " https://restcountries.eu/rest/v2/callingcode/" + query
              )
            ).json();
            console.log(response);
          }
          if (response.status === 404) {
            console.log("in if");
            response = await (
              await fetch(" https://restcountries.eu/rest/v2/region/" + query)
            ).json();
            console.log(response);
          }
        }
      }
      const data = await response;
      dispatch(LoadCountries(data));
    } catch (error) {
      console.log(error);
      LoadCountries([{ name: "Page not found" }]);
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
  let currentCountries;
  console.log(countries.length);

  currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

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
      <Navbar />
      <div className="container border">
        <div className="row">
          {currentCountries.map((country) => (
            <Country
              key={country.alpha2Code}
              name={country.name}
              population={country.population}
              region={country.region}
              flag={country.flag}
              show={state}
              hideModal={hideModal}
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
      <div className="page-container">
        <Pagination
          perPage={perPage}
          totalPosts={countries.length}
          currentPage={currentPage}
          Paginate={Paginate}
          changePage={changePage}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
