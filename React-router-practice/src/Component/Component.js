import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import shoes from '../api/shoe.json';

const Component = () => {
    const { id } = useParams();
    const shoe = shoes[id];
    console.log(id);
    console.log(shoe);
    return (
        <div>
            <h1>Component</h1>
            <img style={{width: '100px'}} src={shoe.img} alt="" srcset="" />
            <h3>{shoe.name}</h3>

        </div>
    )
}

export default Component;
