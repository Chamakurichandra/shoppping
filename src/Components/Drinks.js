import React, { Component } from 'react';
import "../App.css";
import Lays from "../assets/lays.jpg";
import Powder from "../assets/powder.jpg";
import Juice from "../assets/juice.jpg";
import Boost from "../assets/boost.jpg";
export default class Drinks extends Component {
    render() {
        return (
            <div className="row w-75 mt-3 ml-auto mr-auto">
            <div className="col">
            <img className="w-100  h-50" src={Juice} alt=""/>
            <div>
            <img className="lays " src={Lays} alt=""/>
            <img className="powder " src={Powder} alt=""/> 
            </div>
            </div>  
            <div className="col">
            <img className="w-100 boost" src={Boost} alt=""/>
            </div>
            </div>
        )
    }
}
