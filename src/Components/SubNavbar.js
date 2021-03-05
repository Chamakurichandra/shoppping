import React, { Component } from 'react'

export default class SubNavbar extends Component {
    render() {
        return (
            <div  className="bg-warning">
                <nav className="navbar navbar-expand-lg navbar-light bg-warning container ">
  <a className="navbar-brand  ml-5 pl-5 text-white" href="#1">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#1" id="navbarDropdownMenuLink" data-toggle="dropdown" >
        Groceries
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#1">Action</a>
          <a className="dropdown-item" href="#1">Another action</a>
          <a className="dropdown-item" href="#1">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#1" id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Household
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#1">Action</a>
          <a className="dropdown-item" href="#1">Another action</a>
          <a className="dropdown-item" href="#1">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#1" id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Personal Care
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#1">Action</a>
          <a className="dropdown-item" href="#1">Another action</a>
          <a className="dropdown-item" href="#1">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#1" id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Packaged Foods
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#1">Action</a>
          <a className="dropdown-item" href="#1">Another action</a>
          <a className="dropdown-item" href="#1">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#1" id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Bevarages
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#1">Action</a>
          <a className="dropdown-item" href="#1">Another action</a>
          <a className="dropdown-item" href="#1">Something else here</a>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-white" href="#1">Gourmet</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-white" href="#1">Offers</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-white" href="#1">Contact</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
