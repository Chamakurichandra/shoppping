import React, { Component } from 'react';
import "../App.css";
export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg subNav navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand ml-5 contact" href="1">Order online or call us:(+91)232456525</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active ml-5 pl-5">
        <a className="nav-link text-warning " href="#1" style={{fontSize:"24px"}}> SUPER MARKET<span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 mr-5">
      <input className="form-control mr-sm-2 search" type="search" placeholder="Search for aproduct" aria-label="Search"/>
      <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}
