import React, { Component } from "react";
import "./App.css";
import Ctrlpad from './Components/ctrlpad'
import Beatpad from './Components/beatpad.js';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <Beatpad />
        <Ctrlpad />
        
      </div>
    );
  }
}

export default App;
