import React, { Component } from "react";
import './Stopwatch.css'

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  componentDidMount = () => {
    this.setState({
      timerOn: true,
      timerTime: 0,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 1000);
  }

  showNextSteps = () => {
    this.stopTimer()
    this.props.setCountdown(this.props.maxCountdown)
    this.props.setShowWhichComponent('countdown')
  }

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    
    return (
      <div className="circle stopwatch" onClick={this.showNextSteps}>
        <p className="stopwatch-display">
          {minutes}:{seconds}
        </p>

        {/* {this.state.timerOn === true && (
          <button onClick={this.showNextSteps}>Stop</button>
        )} */}

        {/* {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )} */}
      </div>
    );
    
  }
}

export default Stopwatch;
