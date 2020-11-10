import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "./components/ThemeContext";
import { CountryProvider } from "./components/CountryContext";

import TopBar from "./components/TopBar";
import "./styles/style.css";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CountryProvider>
          <BrowserRouter>
            <TopBar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/:id" component={CountryPage} />
            </Switch>
          </BrowserRouter>
        </CountryProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
