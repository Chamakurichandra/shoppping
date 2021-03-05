import React from 'react';
import "../App.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Channa from "../assets/channa.jpg";
import Navaratan from "../assets/navaratan.jpg";
import Peasmatar from "../assets/peasmatar.jpg";
import Fried from "../assets/fried.jpg";
export default function Home() {
    let footers = [{
        name: "CONTACT",
        icon: [<i className="fa fa-map-marker text-warning"> </i>, <i className="fa fa-envelope text-warning"></i>, <i className="fa fa-phone-square text-warning"></i>],
        info: ["1234 Avenue,4th block, New York City.", "info@example.com", "+1234567 567"],
    },
    {
        name: "INFORMATION",
        icon: [<i className="fa fa-arrow-right text-warning"></i>],
        info: ["About Us", "Contact US", "Short Codes", "FAQ's", "Special Products"],
    },
    {
        name: "CATEGORY",
        icon: [<i className="fa fa-arrow-right text-warning"></i>],
        info: ["Groceries", "Houshold", "Personal Care", "Packaged Foods", "Bevarages"],
    },
    {
        name: "PROFILE",
        icon: [<i className="fa fa-arrow-right text-warning"></i>],
        info: ["Store", "Mycart", "Login", "Create Acount"],
    },
    ]

    let cards=[{
        image:Fried,
        title:"Fried-Gram",
        price:"$20.99",
        offer:"$39.09",
        btn:"ADD TO CART",
        rating:3
    },
    {
        image:Navaratan,
        title:"Navaratan-Dal",
        price:"$30.99",
        offer:"$49.09",
        btn:"ADD TO CART",
        rating:4
    },
    {
        image:Peasmatar,
        title:"White-peasmatar",
        price:"$40.99",
        offer:"$79.09",
        btn:"ADD TO CART",
        rating:3
    },
    {
        image:Channa,
        title:"Channa-Dal",
        price:"$40.99",
        offer:"$79.09",
        btn:"ADD TO CART",
        rating:4
    },
    ]
    
    return (
        <div >
            <div className="bg-light">
           <h2 className="offer" >NEW OFFERS</h2>
            <div className="hr"></div>
             <div className="row w-75 m-auto">
                {cards.map(card => (
                    <div className="col-3 pl-2 pr-2">
                        <Cards prof={card} />
                    </div>
                ))}
            </div>
            </div>
            <div className="bg-dark pt-5 pb-0">
                <div className=" justify-content-around  text-white container" style={{ display: "flex" }}>
                    {footers.map(footer => (
                        <div>
                            <Footer data={footer} />
                        </div>
                    ))}
                </div>
                <div className="text-white m-4 text-center">&copy;2017 Super Market, All rights reserved | Designed by <span className="text-warning">W3layouts</span></div>
                <div className="m-0 p-0 "  >
                <nav className="navbar navbar-light bg-secondary justify-content-between ">
                    <div className="container">
               <a className="navbar-brand" href="#1"> 
                    <i className="fa fa-facebook icn"></i>
                    <i className="fa fa-twitter icn"></i>
                    <i className="fa fa-instagram icn "></i>
                    <i className="fa fa-vimeo icn"></i> </a>
             <div>
             <i className="fa fa-cc-visa icns"></i>
                    <i className="fa fa-cc-paypal icns"></i>
                    <i className="fa fa-cc-mastercard icns "></i>
                    <i className="fa fa-cc-amex icns"></i>           
            </div>
            </div>
            </nav>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}
