import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleTimer() {
    this.setState({ time: this.state.time + 1 });
  }

  handleClick() {
    if (this.state.isRunning === false) {
      this.intervalId = setInterval(this.handleTimer, 1000);
    } else {
      clearInterval(this.intervalId);
    }
    this.setState({ isRunning: !this.state.isRunning });
  }

  resetTimer() {
    if (!this.state.isRunning) {
      this.setState({ time: 0 });
    }
  }

  render() {
    let icon = 'fas fa-play';

    if (this.state.isRunning === true) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }

    return (
      <div className='container'>
        <div className='row center circle-margin'>
          <div className='timer-circle timer-position' onClick={this.resetTimer}>
            <h1>{this.state.time}</h1>
          </div>
        </div>
        <div className='row center'>
          <i className={`icon-size ${icon}`} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
