import React from "react";
import { NavLink } from "react-router-dom";

const SearchComp = ({ query, setQuery, filteredResults, darkTheme }) => {
  return (
    <React.Fragment>
      <form className="input-group">
        <input
          type="search"
          className={
            darkTheme
              ? "form-control rounded-sm pl-0 text-light dark-field"
              : "form-control rounded-sm pl-0 light-field"
          }
          placeholder="Search any Country"
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <div className="list-group shadow-lg">
        {filteredResults.map((result, index) => (
          <NavLink
            to={result?.replace(/\s+/g, "-").toLowerCase()}
            key={index}
            className={
              darkTheme
                ? "list-group-item list-group-item-action text-light bg-dark"
                : "list-group-item list-group-item-action"
            }
          >
            <span style={{ color: "rgb(102, 178, 255)" }} className="fw-bold">
              {query}
            </span>
            {result.substring(query.length)}
          </NavLink>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SearchComp;
