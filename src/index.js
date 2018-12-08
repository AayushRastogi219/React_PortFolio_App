import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';


ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<SideBar />, document.getElementById("root"));
registerServiceWorker();
