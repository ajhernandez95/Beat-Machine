import React, { Component } from "react";
import "./App.css";

//let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this)
   
  }


  onClick(e) {
    let itemId = JSON.stringify(e.target.getAttribute('id'))
    document.getElementById(itemId).style.backgroundColor = 'blue'
    console.log(itemId)
    
    
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
              Q
            </div>
            <div class="drum-pad" id="test2" onClick={this.onClick}>
              W
            </div>
            <div class="drum-pad" id="test3" onClick={this.onClick}>
              E
            </div>
            <div class="drum-pad" id="test4" onClick={this.onClick}>
              A
            </div>
            <div class="drum-pad" id="test5" onClick={this.onClick}>
              S
            </div>
            <div class="drum-pad" id="test6" onClick={this.onClick}>
              D
            </div>
            <div class="drum-pad" id="test7" onClick={this.onClick}>
              Z
            </div>
            <div class="drum-pad" id="test8" onClick={this.onClick}>
              X
            </div>
            <div class="drum-pad" id="test9" onClick={this.onClick}>
              C
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
