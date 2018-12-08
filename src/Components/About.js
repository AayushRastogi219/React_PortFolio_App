import React, {Component} from 'react';
import '../About.css';

class About extends Component{
  render(){
    return(
      <div className='about container-fluid'>
        <h2>{this.props.secHeader}</h2>
        <h3>{this.props.description}</h3>
        <a href="#button">{this.props.buttonText}</a>
      </div>
    );
  }
}

export default About;
