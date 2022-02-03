import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const TopBar = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <nav
        className={
          darkTheme
            ? "navbar navbar-dark bg-dark text-light fixed-top shadow container"
            : "navbar navbar-light bg-light fixed-top shadow-sm container"
        }
      >
        <NavLink className="navbar-brand" to="/">
          <h6 className="my-0"> Weather Ups</h6>
        </NavLink>

        <div className="ms-auto d-flex">
          <NavLink
            className={darkTheme ? "text-light me-4" : "text-dark me-4"}
            to="/about"
          >
            About
          </NavLink>
          {darkTheme ? (
            <i
              className="fas fa-moon mt-1 pointer"
              onClick={() => {
                setDarkTheme(!darkTheme);
                localStorage.setItem("weather-theme", darkTheme);
              }}
              style={{ fontSize: 18 }}
            ></i>
          ) : (
            <i
              className="fas fa-sun mt-1 pointer"
              onClick={() => {
                setDarkTheme(!darkTheme);
                localStorage.setItem("weather-theme", darkTheme);
              }}
              style={{ color: "rgb(255,214,0)", fontSize: 18 }}
            ></i>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopBar;
