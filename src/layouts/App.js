import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <header>{<Header />}</header>
        <navigation>{<Navigation />}</navigation>
        <page>{<Page />}</page>
        <footer>{<Footer />}</footer>
      </div>
    </>
  );
}

export default App;
