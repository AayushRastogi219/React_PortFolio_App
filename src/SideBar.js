import React, {Component} from 'react';
import './Sidebar.css';
import $ from 'jquery';

class SideBar extends Component{
  constructor(){
    super();
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }
  handleMenuToggle(event){
    event.preventDefault();
    $('#wrapper').toggleClass('menuDisplayed');
  }
  render(){
    return(
      <div id='wrapper'>

        {/* SideBar */}
        <div id='sidebar-wrapper'>
          <ul className='sidebar-nav'>
            <li><a href='#'>Account</a></li>
            <li><a href='#'>Account</a></li>
            <li><a href='#'>Account</a></li>
          </ul>
        </div>

        {/* Page Content */}
        <div id='page-content-wrapper'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <a href='#' className='btn btn-success' id='menu-toggle' onClick={this.handleMenuToggle}>Toggle Menu</a>
                <h1>Sidebar layout are cool</h1>
                <p>Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. Don't give up. </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default SideBar;
