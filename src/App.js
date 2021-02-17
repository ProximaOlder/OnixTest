import React from "react";
import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import evilMonkey from "./img/evilMonkey.png";
import NewOrder from "./components/main/newOrder/newOrder"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="core">
          <Header />
          <Main />
          <NewOrder />
          <Footer />
        </div>
      </div>
      <div className="sidebar">
        <div className="monkey">
          <img src={evilMonkey} alt="evilMonkey"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
