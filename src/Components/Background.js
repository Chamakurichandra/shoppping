import React, { Component } from 'react'
import Rice from "../assets/rice.jpg";
import "../App.css";
export default class Background extends Component {
    render() {
        return (
            <div>
              <div className="position-relative bgImg">
                  <img className="w-100" src={Rice} alt="" />
                  <h3 className="buy text-white position-absolute">BUY RICE PRODUCTS ARE ONLINE WITH US</h3>
             </div>  
            </div>
        )
    }
}
