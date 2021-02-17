import React from "react";
import {Switch,Route  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Connect from "./Connect";
import Cards from "./Cards";
import Error from "./Error";
import './App.css';
const App=()=>{
  return 
  (<>
  <h2>Hey </h2>
   <Switch>
     <Route path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/connect" component={Connect}/>
     <Route path="/cards" component={Cards}/>
     <Route component={Error}/>
   </Switch>
  </>
    
  );
}

export default App;
