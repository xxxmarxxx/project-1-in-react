import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <header>{<Header />}</header>
  <navigation>{<Navigation/>}</navigation>

      </div>
      <footer>{<Footer />}</footer>
    </>
  );
}

export default App;
