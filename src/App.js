import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
      <div class='pad-wrap'>
      <div class='row-one'>
      <div class="drum-pad" id=""><h1>Q</h1></div>
      <div class="drum-pad" id=""><h1>W</h1></div>
      <div class="drum-pad" id=""><h1>E</h1></div>
      </div>
      <div class='row-two'>
      <div class="drum-pad" id=""><h1>A</h1></div>
      <div class="drum-pad" id=""><h1>S</h1></div>
      <div class="drum-pad" id=""><h1>D</h1></div>
      </div>
      <div class='row-three'>
      <div class="drum-pad" id=""><h1>Z</h1></div>
      <div class="drum-pad" id=""><h1>X</h1></div>
      <div class="drum-pad" id=""><h1>C</h1></div>
      </div>
      </div>
      <div class='ctrl-wrap'>
      <h1>ctrl-wrap</h1>
      <div class='switch' />
      </div>
      </div>
         );
  }
}

export default App;
