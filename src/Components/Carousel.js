import React, { Component } from 'react';
import "../App.css";
import Banner_1 from "../assets/banner-1.jpg";
import Banner_2 from "../assets/banner-2.jpg";
import Banner_3 from "../assets/banner-3.jpg";
export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100  banner" src={Banner_2} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 banner" src={Banner_1} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 banner" src={Banner_3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
        )
    }
}
