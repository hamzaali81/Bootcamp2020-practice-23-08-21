import React from 'react'
import shoes from '../../api/shoe.json';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";
import ProductItem from '../ProductItem/ProductItem';

const Product = ({routes}) => {
    console.log(routes);
    console.log(shoes); 
    

    return (
        <div>
            <h1>Product</h1>
            
            {
                Object.keys(shoes).map((KeyName)=> {
                    const objItem = shoes[KeyName];
                    return (
                        <Link to={`/product/${KeyName}`}>
                            <h1>{objItem.name}</h1>
                            </Link>
                    )
                })
            }
            

               <Switch>

            {
                routes.map((el)=> {
                    console.log(el);
                  return  (
                  <Route path={el.path}>
                      <el.component />
                  </Route>
                  )
                })
            }
               </Switch> 
     
            
        </div>
    )
}

export default Product
