import React, { Component } from 'react';
import "../App.css";
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <a className="navbar-brand text-white ml-5 mob-header" href="#1" style={{fontSize:"16px"}}>SALE UP TO 70% OF. USE CODE *SALE70%*.<span className="text-warning">SHOP NOW</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="  navbar-nav ml-5 mr-auto pl-5 mt-2 mt-lg-0 ">
      <li className="nav-item  ">
        <a className="nav-link text-white " href="#1">Create Acount </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#1">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#1">Help</a>
      </li>
    </ul>
    <div className="inline my-2 my-lg-0 mr-5 pr-5 text-white">
      <i className="fa fa-cart-plus"></i>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
