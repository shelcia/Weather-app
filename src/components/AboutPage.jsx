import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const AboutPage = () => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "container-fluid bg-dark" : "container-fluid bg-light"
        }
        style={{ height: "100vh" }}
      >
        <div
          className="container"
          style={{ paddingTop: "15vh", height: "100vh", overflowY: "scroll" }}
        >
          <h2 className={darkTheme ? "text-light mb-5" : "text-dark mb-5"}>
            Resources
          </h2>
          <h4 className={darkTheme ? "text-light mb-2" : "text-dark mb-2"}>
            Rest Countries API
          </h4>
          <a href="https://restcountries.eu/">https://restcountries.eu/</a>
          <h4
            className={
              darkTheme ? "text-light mb-2 mt-5" : "text-dark mb-2 mt-5"
            }
          >
            Open Weather API
          </h4>
          <a href="https://openweathermap.org/api">
            https://openweathermap.org/api
          </a>
          <h2 className={darkTheme ? "text-light my-5" : "text-dark my-5"}>
            About App
          </h2>
          <p className={darkTheme ? "text-light mb-4" : "text-dark mb-4"}>
            The app is bootstrapped with create-react-app and made using React.
          </p>
          <h4 className={darkTheme ? "text-light mb-2" : "text-dark mb-2"}>
            Want to know how it is built ?
          </h4>
          <a href="https://github.com/shelcia/Weather-app">
            Source code in github
          </a>

          <h4
            className={
              darkTheme ? "text-light mb-2 mt-5" : "text-dark mb-2 mt-5"
            }
          >
            About the Developer
          </h4>
          <a href="https://www.linkedin.com/in/shelcia/">Linkedin</a>
          <a href="https://shelcia-portfolio.netlify.app/" className="ml-5">
            Portfolio
          </a>
          <hr></hr>
          <div className="text-center my-3">
            <h5 className={darkTheme ? "text-light py-4 " : "text-dark py-4 "}>
              Developed by Shelcia
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
