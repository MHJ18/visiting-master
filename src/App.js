import "./App.scss";
import Cards from "./components/Cards";
import Featured from "./components/featured/Featured";
import Form from "./components/form/Form";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Cards />
      <Featured />
      <Stories />
      <Form />
    </div>
  );
}

export default App;
