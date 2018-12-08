import React, { Component } from 'react';
import {Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Nav from './Navigation';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import scrollToComponent from 'react-scroll-to-component';
import './Navigation.css';
import scroll from 'react-scroll';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import $ from 'jquery';
// import SideBar from './SideBar';

const customHistory=createBrowserHistory();

class App extends Component {
  constructor(){
    super();
    this.handleScrollToAboutComponent = this.handleScrollToAboutComponent.bind(this);
    this.handleScrollToServiceComponent = this.handleScrollToServiceComponent.bind(this);
    this.handleScrollToHomeComponent = this.handleScrollToHomeComponent.bind(this);
    this.handletogglebutton = this.handletogglebutton.bind(this);
    this.state={isCollapsed:true};
  }
  componentDidMount() {
    const testNode = ReactDOM.findDOMNode(this.refs.homeRef);
    testNode.scrollIntoView();
  }
  handleScrollToAboutComponent(){
    scrollToComponent(this.refs.aboutRef, {
    offset: 0,
    align: 'top',
    duration: 1500
});
    // const testNode = ReactDOM.findDOMNode(this.refs.aboutRef);
    // testNode.scrollIntoView();
  }
  handleScrollToServiceComponent(){
    scrollToComponent(this.refs.serviceRef, {
    offset: 0,
    align: 'top',
    duration: 1500
});
    // const testNode = ReactDOM.findDOMNode(this.refs.serviceRef);
    // testNode.scrollIntoView();
  }
  handleScrollToHomeComponent(){
    scrollToComponent(this.refs.homeRef, {
    offset: 0,
    align: 'top',
    duration: 1500
});
    // const testNode = ReactDOM.findDOMNode(this.refs.homeRef);
    // testNode.scrollIntoView();
  }
  handletogglebutton(event){
    console.log('hi');
    // event.preventDefault();
    this.setState({isCollapsed:!this.state.isCollapsed});
  }

  render() {
    const classOne= this.state.isCollapsed? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo= this.state.isCollapsed? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return (
      <div className='App'>

        {/* <Nav projectTitle='React Project' /> */}
        <Router history={customHistory}>
          <div className='container-ul container-fluid'>
            {/* <ul>
              <li><NavLink exact activeClassName='selected' to='/' onClick={this.handleScrollToHomeComponent}>Home</NavLink></li>
              <li><NavLink exact activeClassName='selected' to='/about' onClick={this.handleScrollToAboutComponent}>About</NavLink></li>
              <li><NavLink exact activeClassName='selected' to='/services' onClick={this.handleScrollToServiceComponent}>Services</NavLink></li>
              <li><NavLink exact activeClassName='selected' to='/portfolio'>PortFolio</NavLink></li>
              <li><NavLink exact activeClassName='selected' to='/contact'>Contact</NavLink></li>
            </ul> */}
            <nav className='navbar navbar-expand-xl navbar-dark bg-dark fixed-top'>
              <div className='container-fluid'>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className='navbar-header' >
                  <Nav projectTitle='React Project' />
                </div>
                {/* <button className={'$(classTwo)'} type="button" data-toggle="collapse" data-target='#collapsibleNavbar' onClick={this.handletogglebutton}> */}
                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target='#collapsibleNavbar' onClick={this.handletogglebutton}>
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className={'$(classOne)'} id='collapsibleNavbar'> */}
                <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                  <ul className='nav navbar-nav navbar-right'>
                    <li className='nav-item'><NavLink className='nav-link' exact activeClassName='selected' to='/' onClick={this.handleScrollToHomeComponent}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className='nav-link' exact activeClassName='selected' to='/about' onClick={this.handleScrollToAboutComponent}>About</NavLink></li>
                    <li className="nav-item"><NavLink className='nav-link' exact activeClassName='selected' to='/services' onClick={this.handleScrollToServiceComponent}>Services</NavLink></li>
                    <li className="nav-item"><NavLink className='nav-link' exact activeClassName='selected' to='/portfolio'>PortFolio</NavLink></li>
                    <li className="nav-item"><NavLink className='nav-link' exact activeClassName='selected' to='/contact'>Contact</NavLink></li>
                  </ul>
                </div>

              </div>
            </nav>

          </div>
        </Router>

        <Header headerTitle='Stylish Portfolio' buttonText='Find Out More' ref='homeRef'/>
        <About ref='aboutRef' secHeader='Stylish Portfolio is the perfect theme for your next project!' description='This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash!' buttonText='What We Offer' />
        <Services ref='serviceRef' name='Services' secHeader='What We Offer' />
      </div>
    );
  }
}

export default App;
