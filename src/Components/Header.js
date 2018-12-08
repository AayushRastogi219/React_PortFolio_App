import React, {Component} from 'react';
import '../Header.css';

class Header extends Component{
  render(){
    return(
      <header className='img-responsive container-fluid'>
        <h1>{this.props.headerTitle}</h1>
        <h2>A Free Bootstrap Theme by Start</h2>
        <a className='anchor' href="#button">{this.props.buttonText}</a>
      </header>
    );
  }
}

export default Header;
