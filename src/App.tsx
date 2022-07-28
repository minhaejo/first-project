import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { JsxElement } from "typescript";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contents from "./Components/absorption/Contents";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Contents />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
