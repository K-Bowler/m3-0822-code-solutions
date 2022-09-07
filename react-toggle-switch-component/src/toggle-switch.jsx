import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    let toggleText = 'ON';
    let containerColor = 'bg-white';
    let circlePosition = 'left';

    if (this.state.toggle === false) {
      toggleText = 'OFF';
      containerColor = 'bg-white';
      circlePosition = '';
    } else {
      toggleText = 'ON';
      containerColor = 'bg-green';
      circlePosition = 'switch-on';
    }

    return (
        <div className='container'>
          <div className='row'>
            <div className={`button-container ${containerColor}`} onClick={ this.handleClick }></div>
            <div className={`button-circle ${circlePosition}`} onClick={this.handleClick}></div>
            <p className='mono-font'> {`${toggleText}`} </p>
          </div>
        </div>
    );
  }
}

export default ToggleSwitch;
