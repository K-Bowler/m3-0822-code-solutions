import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      toggle: true,
      menu: false
    };
  }

  handleChange(event) {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    let background = 'modal-background';
    let hamberger = 'icon-style fas fa-bars';
    let menuContainer = 'menu-container';

    if (this.state.toggle === false) {
      background = 'modal-background';
      hamberger = 'hidden';
      menuContainer = 'menu-container';
    } else {
      background = 'hidden';
      hamberger = 'icon-style fas fa-bars';
      menuContainer = 'hidden';
    }

    return (
      <div className='container full-height'>
        <div className='row'>
          <div className='column col-one-fourth'>
            <div className='row'>
              <i className={hamberger} onClick={this.handleChange}></i>
            </div>
            <div className='row'>
              <div className={menuContainer}>
                <h1 className='menu-text-h1'>Menu</h1>
                <p className='menu-text-p' onClick={this.handleChange}>About</p>
                <p className='menu-text-p' onClick={this.handleChange}>Get Started</p>
                <p className='menu-text-p' onClick={this.handleChange}>Sign In</p>
              </div>
            </div>
          </div>
          <div className='column col-three-fourths'>
            <div className={background} onClick={this.handleChange}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
