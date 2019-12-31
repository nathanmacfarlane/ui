import React, { Component } from "react";
import "./App.css";
import Type from "./components/type/Type"

class App extends Component {
  render() {
    return (
      <div>
        <Type level={1}>APP</Type>
      </div>
    );
  }
}

export default App;
