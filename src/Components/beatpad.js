import React, { Component } from "react";

class Beatpad extends Component {
  render() {
    return (
      <div class="pad-wrap">
        <div class="drum-pad" id="">
          <h1>Q</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>W</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>E</h1>
        </div>

        <div class="drum-pad" id="">
          <h1>A</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>S</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>D</h1>
        </div>

        <div class="drum-pad" id="">
          <h1>Z</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>X</h1>
        </div>
        <div class="drum-pad" id="">
          <h1>C</h1>
        </div>
      </div>
    );
  }
}

export default Beatpad;
