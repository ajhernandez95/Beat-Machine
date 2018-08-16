import React, { Component } from "react";
import "./App.css";

//let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this)
    this.getId = this.getId.bind(this)
  }

  getId(e) {
    return e.target.getAttribute('id')
  }

  onClick(e) {
    document.getElementById('sound').play();
    
    console.dir(document)
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div class="drum-pad-wrapper">
            <div class="drum-pad" id="test" onClick={this.onClick}>
              <audio 
                id="sound"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                preload
              />
              <p>Q</p>
            </div>
            <div class="drum-pad" id="">
              <p>W</p>
            </div>
            <div class="drum-pad" id="">
              <p>E</p>
            </div>
            <div class="drum-pad" id="">
              <p>A</p>
            </div>
            <div class="drum-pad" id="">
              <p>S</p>
            </div>
            <div class="drum-pad" id="">
              <p>D</p>
            </div>
            <div class="drum-pad" id="">
              <p>Z</p>
            </div>
            <div class="drum-pad" id="">
              <p>X</p>
            </div>
            <div class="drum-pad" id="">
              <p>C</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
//make beat sound's div id's and p id's 

// use if statement for keycode for onClick method for sounds stolen from FCC BeatMacine

//sound for test --- 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
