import React, { Component } from 'react';
import Home from "./Components/Home";
import SubNav from "./Components/SubNav";
import Header from "./Components/Header";
import SubNavbar from "./Components/SubNavbar";
import Background from "./Components/Background";
import Products from "./Components/Products";
import AllProducts from "./Components/AllProducts";
import Carousel from "./Components/Carousel";
import Drinks from "./Components/Drinks";
import Store from "./Components/Store";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SubNav/>
        <SubNavbar/>
        <Background/>
        <Products/>
        <AllProducts/>
        <Carousel/>
        <Drinks/>
        <Store/>
        <Home/>
      </div>
    )
  }
}
