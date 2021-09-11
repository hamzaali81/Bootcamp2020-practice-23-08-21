import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";

const ProductItem = () => {
    let { id } = useParams();
    console.log(id);

    return (
        <div>
            <h1>Product Item</h1>
            <p>{id}</p>

            
        </div>
    )
}

export default ProductItem;
