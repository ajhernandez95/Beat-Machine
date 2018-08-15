import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
   this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    audio.play
  }
  render() {
    let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    return (
      <div id="drum-machine">
        <div id='display'>
        <h1>here</h1>
        </div>
      </div>
    );
  }
}

export default App;
// use if statement for keycode for onClick method for sounds stolen from FCC BeatMacine

//sound for test --- 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'