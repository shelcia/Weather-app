import React, { useState } from "react";

const Navbar = ({ setQuery }) => {
  //   const [search, setSearch] = useState("");

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          <h5>Countries</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(event) => {
                setQuery(search);
                event.preventDefault();
              }}
            >
              Search
            </button>
          </form>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
