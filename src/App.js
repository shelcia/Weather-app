import React from "react";

import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import TopBar from "./components/TopBar";
import routes from "./routes";
import "./styles/bootstrap/bootstrap.css";
import "./styles/style.css";

const App = () => {
  const allPages = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider>
        <TopBar />
        {allPages}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
