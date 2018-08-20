import React, { Component } from "react";
import "./App.css";

const bank = [
  {
    keyCode: 81,
    letter: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    letter: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    letter: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    letter: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    letter: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    letter: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    letter: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    letter: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    letter: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class Drumpad extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //add componentdidmount/unmount and addeventlistener for handlekeypress
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEvenetListener("keydown", this.handleKeyPress);
  }

  handleClick() {
    this.audio.play();
    this.audio.currentTime = 0;
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
    }
  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        <h1 className="letter">{this.props.letter}</h1>
        <audio
          ref={ref => (this.audio = ref)}
          src={this.props.src}
          id={this.props.letter}
          className="clip"
        >
          No music support
        </audio>
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <h2 className='.power'>Power</h2>
        <div className="power-switch-wrap"> 
        <div className='power-switch' />
        </div>
        <h2 className='.sound'>Sound: </h2>
        <h3 className='.sound-input'>{this.props.sound}</h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sound: 'Change Sound'

    }
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          {bank.map(x => (
            <Drumpad
              id={x.id}
              src={x.src}
              letter={x.letter}
              keyCode={x.keyCode}
            />
          ))}
        </div>
        <div className="controls-wrapper">
          <Controls sound={this.state.sound}/>
        </div>
      </div>
    );
  }
}

export default App;
