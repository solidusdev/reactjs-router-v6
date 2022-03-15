import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import "./scss/main.scss";

const App = () => {
  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;