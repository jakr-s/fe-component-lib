import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";

const Routes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
