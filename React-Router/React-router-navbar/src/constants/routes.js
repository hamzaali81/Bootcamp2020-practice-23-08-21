import React from "react";
import Home from '../Compoenet/Home/Home';
import Product from '../Compoenet/Product/Product';
import Contact from '../Compoenet/Contact/Contact';
import About from '../Compoenet/About/About';
import ProductItem from '../Compoenet/ProductItem/ProductItem';


const routes = [
    { 
      name: 'Product',
      path: "/product",
      Component: Product,
      routes: [
        {
          path: "/product/:id",
          component: ProductItem
        },
       
      ]
    },
    {
      name: 'Contact',
      path: "/contact",
      Component: Contact

      
    },
    { 
      name: 'About',
      path: "/about",
      Component: About

     
    }
  ];


export default routes;