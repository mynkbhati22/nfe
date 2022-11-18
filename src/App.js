import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactNav from "./jsx/components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <ReactNav />
      </Router>
    </div>
  );
}

export default App;
