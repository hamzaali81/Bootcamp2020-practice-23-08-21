import React, {useState} from 'react';
import shoes from '../api/shoe.json';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  

const Product = () => {
    console.log(shoes);
    // console.log(Object.values(shoe));
    // console.log(shoe);
    return (
        <div>
            <h1>Product</h1>
            {
              Object.keys(shoes).map((keyName)=> {
                //   console.log(shoes[keyName]);
                  const a = shoes[keyName];
              return (
                  <div >
                      <img style={{width: '100px'}} src={a.img} alt="" srcset="" /> 
                      <Link to={`/product/${keyName}`}>{a.name}</Link> 
                       <h3>{a.name}</h3>
                  </div>
              )
              })
            }
        </div>
    )
}

export default Product
