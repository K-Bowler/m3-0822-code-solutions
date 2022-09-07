import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    let buttonColor = 'dark-blue';
    let fontColor = 'font-white';

    if (this.state.numberOfClicks <= 3) {
      buttonColor = 'dark-blue';
    } else if (this.state.numberOfClicks <= 6) {
      buttonColor = 'light-blue';
    } else if (this.state.numberOfClicks <= 9) {
      buttonColor = 'light-red';
    } else if (this.state.numberOfClicks <= 12) {
      buttonColor = 'light-orange';
    } else if (this.state.numberOfClicks <= 15) {
      buttonColor = 'light-yellow';
    } else {
      buttonColor = 'white';
      fontColor = 'font-black';
    }

    return (
      <div className='container'>
        <div className='row'>
          <button className= { `hot-button ${buttonColor} ${fontColor}`} onClick={ this.handleClick }>Hot Button</button>
        </div>
      </div>
    );
  }
}

export default HotButton;
