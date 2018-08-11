import React, { Component } from "react";

class Ctrlpad extends Component {
  render() {
    return (
      <div class="ctrl-wrap">
        <h3>Power</h3>
        <div class="switch-wrap">
          <div class="switch" />
        </div>
        <div class="sound-wrap">
          <h2>test text</h2>
        </div>
        <h3>bank</h3>
        <div class="bank-wrap">
          <div class="bank" />
        </div>
      </div>
    );
  }
}

export default Ctrlpad;
