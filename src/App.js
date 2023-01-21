import "./App.scss";
import Cards from "./components/Cards";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Navigation from "./components/navigation/Navigation";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Cards />
      <Featured />
      <Stories />
      <div className="form">
        <Form />
      </div>
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
