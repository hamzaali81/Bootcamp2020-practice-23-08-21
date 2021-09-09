import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import Product from './Component/Product';
import Component from './Component/Component';

function App() {
  return (
    <Router>   
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/product">
         <Product />
        </Route>
        <Route exact path="/product/:id">
         <Component />
        </Route>
        {/* <Route path="*" component={()=><h2>404 Not Found</h2>}/> */}

      </Switch>
    
  </Router>
  );
}

export default App;
