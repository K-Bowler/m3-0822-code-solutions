import React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello, React!'
    );
  }
}

console.log(Hello);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, { toWhat: 'World' }, null));
