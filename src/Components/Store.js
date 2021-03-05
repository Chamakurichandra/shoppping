import React from 'react';
import "../App.css";
export default function Store() {
    let Stores =["LOREM-1","LOREM-2","LOREM-3","LOREM-4","LOREM-5","LOREM-6","LOREM-7","LOREM-8","LOREM-9","LOREM-10","LOREM-11","LOREM-12","LOREM-13","LOREM-14","LOREM-15","LOREM-16","LOREM-17","LOREM-18"]
    return (
        <div className="store" style={{backgroundColor:"darksalmon"}}>
            <h2 className="brand">BRAND STORE</h2>
            <div className="hr"></div>
 <div  className="row   w-75 m-auto justify-content-around ">
         {Stores.slice(0, 6).map(store=>(
             <div className=" box col mt-3 py-2 mx-1">  
                  {store}
                  </div>

         ))}    
        
             </div> 
             <div  className="row  w-75 m-auto justify-content-around">
         {Stores.slice(6, 12).map(store=>(
             <div className="col mt-3 py-2 mx-1 box">  
                  {store}
                  </div>

         ))}    
        
             </div>
             <div  className="row  w-75 m-auto justify-content-around ">
         {Stores.slice(12, 18).map(store=>(
             <div className="col mt-3 box py-2 mx-1">  
                  {store}
                  </div>

         ))}    
        
             </div>          
        </div>
    )
}
