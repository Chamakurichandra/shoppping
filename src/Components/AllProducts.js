import React, { Component } from 'react';
import ProductValues from "./Product_Values";
export default class AllProducts extends Component {
    render() {
        return (
            <div className="bg-light ">
                 <h2 className="pt-5 text-center mob-offer ">TOP SELLING OFFERS</h2>
                 <div className="hr mb-5"></div>
                <div className="card w-75 m-auto bg-light">       
                    <div className="card-header p-0 m-0 row ">
                        <div className="bg-warning py-2 col-6  text-center">ADVERTISED OFFERS</div>
                        <div className="col-6 py-2 text-center">TODAY OFFERS</div>
                    </div>
                    <div className="card-title ml-5">
                        <h4 className="mt-2">Advertised this week</h4>
                        <p>We've pulled together all our advertised offers into one place . So<br></br> you won't miss out on a great deal.</p>
                    </div>
                    <div className="card-body">
                    <ProductValues/>
                    </div>
                    </div>
            </div>
        )
    }
}
