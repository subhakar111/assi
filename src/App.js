import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Home';
import Stocks from './Stocks';
import Quotes from './Quotes';
//import Pricehistory from './Pricehistory';

const activeStyle = {
  fontWeight: "bold",
  color: "red"
 };
 
//Home();
//Stocks();
// Quotes();
 //Pricehistory();

function App() {
  return (
    <Router>
    <div>
    <ul>
  
    <li>
  
    <NavLink exact to="/" activeStyle={activeStyle}>
    Home
    </NavLink>
    </li>
    <li>
    <NavLink to="/stocks" activeStyle={activeStyle}>
    stocks
    </NavLink>
    </li>
    <li>
    <NavLink to="/Quotes" activeStyle={activeStyle}>
    Quotes
    </NavLink>
    </li>
   
    </ul>
    
    <Switch>
   
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/stocks">
    <Stocks />
    </Route>
    <Route path="/Quotes/:symbol">
    <Quotes />
    </Route>
    
    </Switch>
    </div>
    </Router>

  );
}

export default App;
