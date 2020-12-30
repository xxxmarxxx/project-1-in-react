import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Example from "../pages/Responsive";

function App() {
  return (
    <Router>
      <div className="box">
        <Example />
        <Header />
        <Navigation />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
