import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

import MainForm from "./mainForm";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
	  	<h1 id="title">The Kojima Name Generator</h1>
        <MainForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

