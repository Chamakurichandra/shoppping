import React from 'react';
import "../App.css";
import Products from "./Products";
import Salt from "../assets/tata-salt.jpg";
import Sunflower from "../assets/sunflower.jpg";
import Rice from "../assets/ashirvad_rice.jpg";
import Dal from "../assets/dal.jpg";
import Sugar from "../assets/sugar.jpg";
import Oil from "../assets/oil.jpg";
export default function Product_Values() {
    let products=[{
        image:Salt,
        title:"Tata-Salt",
        price:"$20.99",
        offer:"$39.09",
        btn:"ADD TO CART",
        rating: 4
    },
    {
        image:Sunflower,
        title:"Fortune-Sunflower",
        price:"$30.99",
        offer:"$49.09",
        btn:"ADD TO CART",
        rating: 4
    },
    {
        image:Rice,
        title:"Ashirvad-Atta",
        price:"$40.99",
        offer:"$79.09",
        btn:"ADD TO CART",
        rating: 5
    },
    {
        image:Dal,
        title:"Sampann-Toor-Dal",
        price:"$30.99",
        offer:"$49.09",
        btn:"ADD TO CART",
        rating: 2
    },
    {
        image:Sugar,
        title:"Parryss-Sugar",
        price:"$60.99",
        offer:"$89.09",
        btn:"ADD TO CART",
        rating: 3
    },
    {
        image:Oil,
        title:"Saffola-Gold",
        price:"$45.99",
        offer:"$69.09",
        rating: 3,
        btn:"ADD TO CART",
        
    },

    
    ]
    
    return (
        <div >
    <div className="row justify-content-around ">     
                {products.map(product=>(
                    <div className="col-4 mob-card mb-3">
                        <Products data={product}/>
                    </div>
                ))}
                </div>        
        </div>
    )
}
