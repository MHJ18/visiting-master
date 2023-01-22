import { useRef } from "react";
import "./App.scss";
import Cards from "./components/Cards";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Navigation from "./components/navigation/Navigation";
import Popup from "./components/popup/Popup";
import Stories from "./components/stories/Stories";

function App() {
  const first = useRef();
  return (
    <div className="App">
      <Navigation first={first} />
      <div id="about">
        <Popup first={first} />
        <Header />
      </div>
      <div id="benefits">
        <MainBody />
      </div>
      <Cards />
      <Featured first={first} />
      <Stories />
      <div className="form">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
