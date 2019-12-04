import React, { Component } from 'react'

export default class  Timer extends Component {
    state = {
      isActive: false,
      secondsElapsed: 30
    };
  
    getHours() {
      return ("0" + Math.floor(this.state.secondsElapsed / 3600)).slice(-2);
    }
  
    getMinutes() {
      return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(-2);
    }
  
    getSeconds() {
      return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
    }
  
    startTime = () => {
      this.setState({ isActive: true });
      
      this.countdown = setInterval(() => {
        this.setState(({ secondsElapsed }) => ({
          secondsElapsed: secondsElapsed - 1
        }));
      }, 1000);
    };
  
    resetTime = () => {
      clearInterval(this.countdown);
      this.setState({
        secondsElapsed: 30,
        isActive: false
      });
    };
  
    pauseTime = () => {
      clearInterval(this.countdown);
      this.setState({ isActive: false });
    };
  
    render() {
      return (
        <div className="App">
          <div className="timer-container">
            <span className="bloc-timer"> {this.getHours()}</span>
            <span className="bloc-timer"> :{this.getMinutes()}</span>
            <span className="bloc-timer"> :{this.getSeconds()}</span>
          </div>
          <div>
            <button
              onClick={this.state.isActive ? this.pauseTime : this.startTime}
            >
              Start/Pause
            </button>
            <button onClick={this.resetTime}>Reset</button>
          </div>
        </div>
      );
    }
  }