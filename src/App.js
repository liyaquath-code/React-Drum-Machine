import React from 'react';
import Button from './Components/Button';
import { Controls } from './Components/Controls';
import './App.css'

const bank = [
  {
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPowerOn: true,
      display: '',
      sound: 50
    }
    this.togglePower = this.togglePower.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateSound = this.updateSound.bind(this);
  }

  togglePower() {
    this.setState({
      isPowerOn: !this.state.isPowerOn,
    })
    this.clearDisplay()
  }

  updateDisplay(text) {
    console.log(text);
    this.setState({
      display: text
    })
  }

  clearDisplay() {
    this.setState({
      display: ''
    });
  }

  updateSound(e) {
    this.setState({
      sound: e.target.value
    })
    this.updateDisplay('Volume: ' + e.target.value);
    setTimeout(() => {
      this.clearDisplay();
    }, 1000);
  }

  render() {
    let buttonObj = bank.map((keyName) => {
      return <Button
        key={keyName.id}
        id={keyName.id}
        text={keyName.keyTrigger}
        clip={keyName.url}
        isPowerOn={this.state.isPowerOn}
        togglePower={this.togglePower}
        handleClick={this.handleClick}
        updateDisplay={this.updateDisplay}
        sound={this.state.sound} />;
    });

    return (
      <div className='container'>
        <div id="drum-machine">{buttonObj}</div>
        <Controls isPowerOn={this.state.isPowerOn} onClick={this.togglePower}
          display={this.state.display}
          sound={this.state.sound}
          updateSound={this.updateSound} />
      </div>
    );
  }
}

export default App;