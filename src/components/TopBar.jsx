import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const TopBar = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <nav
        className={
          darkTheme
            ? "navbar navbar-dark bg-dark text-light fixed-top shadow"
            : "navbar navbar-light bg-light fixed-top shadow-sm"
        }
      >
        <NavLink className="navbar-brand ml-5" to="/">
          Weather App
        </NavLink>
        <form className="ml-auto mr-5">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input pointer"
              onChange={() => {
                setDarkTheme(!darkTheme);
                localStorage.setItem("weather-theme", darkTheme);
              }}
              id="switch1"
            />
            <label className="custom-control-label" htmlFor="switch1">
              Toggle Themes
            </label>
          </div>
        </form>
      </nav>
    </React.Fragment>
  );
};

export default TopBar;
