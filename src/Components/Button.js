import React from "react";
import './Button.css'

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.animateButton = this.animateButton.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress)
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress)
    }
  
    handleKeyPress(e) {
      console.log(e.key)
      if (e.key.toUpperCase() === this.props.text) {
        this.playSound();
      }
      if(e.key === ' ') {
        this.props.togglePower();
      }
    }
  
    playSound() {
      const sound = document.getElementById(this.props.text);
      if (this.props.isPowerOn) {
        sound.currentTime = 0;
        sound.volume = this.props.sound / 100;
        sound.play();
        this.props.updateDisplay(this.props.id.replace(/-/g, ' '));
      }
      this.animateButton();
    }
  
    animateButton() {
      document.getElementById(this.props.id).classList.add("pressed");
      setTimeout(() => {
        document.getElementById(this.props.id).classList.remove("pressed");
      }, 100);
    }
  
    render() {
      return (
        <div className="drum-pad" id={this.props.id} onClick={this.playSound}>
          <audio
            className='clip'
            id={this.props.text}
            src={this.props.clip}
          />
          {this.props.text}
        </div>
      )
    }
  }

  export default Button;