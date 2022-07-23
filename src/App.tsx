import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import { JsxElement } from "typescript";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div>
      {/* <Header />
      <Main /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
      {/* <Main /> */}
    </div>
  );
}

export default App;
