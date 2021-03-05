import React, { Component } from 'react'
import "../App.css";
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            data:props.data
        }
    }
    render() {
        const data=this.props.data
        return (
            <div>
  <div className="card-group ">
  <div className="card  " style={{textAlign:"center"}}>
  {data===undefined?'':<div >
    <img className="card-img-top img" src={data.image} alt="" />
    <div className="card-body">
      <h5 className="card-title ">{data.title}</h5>
      <div>
          {[1,2,3,4,5].map(e=> data.rating>=e?<i className="fa fa-star text-primary"></i>:<i className="fa fa-star"></i>)}
      </div>
      <span className="mr-5">{data.price}</span>
      <span style={{textDecoration:"line-through"}}>{data.offer}</span>
      <button type="button" className="btn btn-primary btn-block mt-5">ADD TO CART</button>
    </div>
 </div> }</div>
  </div>
  </div>      
        )
    }
}
