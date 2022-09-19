import React from 'react';

class AccordionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentId: null,
      toggle: false
    };
  }

  handleClick(id) {
    if (this.state.currentId === id) {
      this.setState({ currentId: null });
    } else {
      this.setState({ currentId: id });
    }
  }

  render(props) {
    const entries = this.props.entries;
    const content = entries.map(entries =>
      <div id={entries.id} key={entries.id}>
        <div className='row justify-center'>
          <div className='row align-center header-box' onClick={() => this.handleClick(entries.id)}>
            <h1 className='header-text'>{entries.title}</h1>
          </div>
        </div>
        <div className='row justify-center'>
          <div id={entries.id} className={entries.id === this.state.currentId ? 'open-box' : 'close-box'} onClick={this.handleClick}>
            <p>{entries.description}</p>
          </div>
        </div>
      </div>
    );

    return (
      <div className='container'> {content} </div>
    );
  }
}

export default AccordionComponent;
