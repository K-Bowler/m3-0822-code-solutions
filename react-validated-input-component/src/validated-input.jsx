import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      input: ''
    };
  }

  handlePasswordChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    let icon = 'fas fa-times';
    let requirementCheck = 'A password is required';

    if (this.state.input.length > 0 && this.state.input.length < 8) {
      icon = 'fas fa-times';
      requirementCheck = 'Password is too short';
    } else if (this.state.input.length >= 8) {
      requirementCheck = '';
      icon = 'fas fa-check';
    }

    return (
      <div className='container'>
        <div className='row'>
          <h3>Password</h3>
        </div>
        <div className='row align-center'>
          <input className='password-box' type="password" value={this.state.input} onChange={this.handlePasswordChange}/>
          <i className={icon}></i>
        </div>
        <div className='row'>
          <p>{requirementCheck}</p>
        </div>
      </div>
    );
  }
}

export default ValidatedInput;
