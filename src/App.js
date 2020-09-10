import React, { useEffect, useState } from "react";
import "./styles/style.css";
import Home from "./components/Home";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { LoadCountries } from "./components/actions";

const App = () => {
  const countries = useSelector((state) => state.countries);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);
  const dispatch = useDispatch();

  useEffect(() => {
    //Get REST API
    console.log(query);
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
        dispatch(LoadCountries(data));
      } catch (error) {
        console.log(error);
        LoadCountries([{ name: "Page not found" }]);
      }
    };
    getCountry();
    // setCurrentPage(1);
  }, [query, dispatch]);

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
      <Navbar setQuery={setQuery} />
      <Home currentCountries={currentCountries} />
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
