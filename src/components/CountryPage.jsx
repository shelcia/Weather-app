import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const CountryPage = ({ match }) => {
  console.log(match.params.id);

  const [darkTheme] = useContext(ThemeContext);

  console.log(darkTheme);

  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "container-fluid bg-dark" : "container-fluid bg-light"
        }
        style={{ height: "100vh" }}
      ></div>
    </React.Fragment>
  );
};

export default CountryPage;
