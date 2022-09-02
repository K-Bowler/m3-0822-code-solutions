import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let text = 'Click Me!';
    if (this.state.isClicked === true) {
      text = 'Thanks!';
    } else {
      text = 'Click Me!';
    }
    return (
      <button onClick={ this.handleClick }> {text} </button>
    );
  }
}

const element = <CustomButton />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
