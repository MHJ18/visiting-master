import "./App.scss";
import Cards from "./components/Cards";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Cards />
    </div>
  );
}

export default App;
