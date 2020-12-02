import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../styles/App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        {/* <Page /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
