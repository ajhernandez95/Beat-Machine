import React, { Component } from "react";
import "./App.css";

const bank = [{
  keyCode: 81,
  letter: 'Q',
  id: 'Heater-1',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  letter: 'W',
  id: 'Heater-2',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  letter: 'E',
  id: 'Heater-3',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  letter: 'A',
  id: 'Heater-4',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  letter: 'S',
  id: 'Clap',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  letter: 'D',
  id: 'Open-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  letter: 'Z',
  id: "Kick-n'-Hat",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  letter: 'X',
  id: 'Kick',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  letter: 'C',
  id: 'Closed-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class Drumpad extends Component{

  handleClick = () => {
    this.audio.play()
    this.audio.curretnTime = 0
  }

  render() {
    return (
      <div className='drum-pad' id='this.props.id' onClick={this.handleClick}>
      <p>{this.props.letter}</p>
      <audio ref={ref => this.audio = ref} id={this.props.id} src={this.props.src}></audio>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
render() {
  return (
    <div id="drum-machine">
      <div id='display'>
        {bank.map(i => (
          <Drumpad 
          id={i.id}
          letter={i.letter}
          src={i.src}
          />
        ))}
      </div>
    </div>
  );
}
}


export default App;
//make beat sound's div id's and p id's 

// use if statement for keycode for onClick method for sounds stolen from FCC BeatMacine

//sound for test --- 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
