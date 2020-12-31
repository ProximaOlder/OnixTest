import React from "react";
import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import evilMonkey from "./img/evilMonkey.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="core">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <div className="sidebar">
        <img src={evilMonkey}></img>
      </div>
    </div>
  );
}

export default App;
