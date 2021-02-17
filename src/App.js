import React from "react";
import {Switch,Route  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Connect from "./Connect";
import Cards from "./Cards";
import './App.css';
const App=()=>{
  return 
  (<>
   <Switch>
     <Route path="/" component={Home}><Home/></Route>
     <Route path="/about" component={About}><About/></Route>
     <Route path="/connect" component={Connect}><Connect/></Route>
     <Route path="/cards" component={Cards}><Cards/></Route>
     <Route component={Error}></Route>
   </Switch>
  </>
    
  );
}

export default App;
