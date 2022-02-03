import React from "react";

import { useRoutes } from "react-router-dom";
import { CountryProvider } from "./components/CountryContext";
import { ThemeProvider } from "./context/ThemeContext";

import TopBar from "./components/TopBar";
import routes from "./routes";
import "./styles/style.css";

const App = () => {
  const allPages = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider>
        <CountryProvider>
          <TopBar />
          {allPages}
        </CountryProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
