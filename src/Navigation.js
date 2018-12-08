import React, {Component} from 'react';
// import {Router, Route, NavLink} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import './Navigation.css';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Services from './Components/Services';
// import PortFolio from './Components/PortFolio';

// const customHistory=createBrowserHistory();

class Nav extends Component{
  render(){
    // const componentsLink = ['Home', 'About', 'Services', 'PortFolio', 'Contact'];
    // const sections = componentsLink.map((section, i)=>{
    //   return(
    //     <li key={i}><NavLink exact activeClassName='selected' to={'/'+section}>{section}</NavLink></li>
    //   );
    // });
    // const routeSections = componentsLink.map((section, i)=>{
    //   return(
    //     <Route key={i} exact path={'/'+section} component={section} />
    //   );
    // });

    return(
      // <Router history={customHistory}>
        <nav>
          <h2 className='logo'>{this.props.projectTitle}</h2>
          {/* <ul>
            <li><NavLink exact activeClassName='selected' to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName='selected' to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName='selected' to='/services'>Services</NavLink></li>
            <li><NavLink exact activeClassName='selected' to='/portfolio'>PortFolio</NavLink></li>
            <li><NavLink exact activeClassName='selected' to='/contact'>Contact</NavLink></li>

          </ul> */}
          {/* {sections} */}
          {/* <Route exact path='/Home' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Services' component={Services} />
            <Route exact path='/PortFolio' component={PortFolio} />
          <Route exact path='/Contact' component={Contact} /> */}
          {/* {routeSections} */}
        </nav>
      // </Router>
      );
  }
}
export default Nav;
