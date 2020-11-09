import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "./components/ThemeContext";
import TopBar from "./components/TopBar";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <TopBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/:id" component={CountryPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
