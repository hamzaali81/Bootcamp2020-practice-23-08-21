import React from 'react';
import routes from '../../constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <h1>Home</h1>
            {
                routes.map((el, i)=> {
                    return (
                        <Link key={i} to={el.path}>
                            {el.name}
                        </Link>
                    )
                })
            }
            <Switch>
            {
                routes.map((el, i)=> {
                    // console.log(...el);
                    return (
                        <Route path={el.path} key={i}>
                           <el.Component {...el}/>
                        </Route>
                        
                        
                        

                    )
                })
            }
            </Switch>
        </Router>
    )
}

export default Home;
