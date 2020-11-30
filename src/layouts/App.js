import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <Page />
        <Footer />
      </div>
    </>
  );
}

export default App;
