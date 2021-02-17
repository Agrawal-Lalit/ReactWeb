import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
import Home from "./Home";
import About from "./About";
import Connect from "./Connect";
import Cards from "./Cards";
import Error from "./Error";
import Menu from "./Menu";
import data from "./FlexData";
import './App.css';
import { Switch ,Route, Redirect} from "react-router-dom";
const App=()=>
{
  const MyCard=()=>
  {  function crafting(val)
    {
      return(<Cards link={val.link} title={val.title} brief={val.brief} />)
    }
    return(
      <div>
      <h4>
      <strong>Following are some of the custom made card components</strong></h4>
      <div className='cardSpace'>
      {data.map(crafting)
      }
      </div>
      </div>
    )
  }
  return(
  <>
  <Menu/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/connect" component={Connect}/>
    <Route path="/cards" component={MyCard}/>
    <Redirect to="/"/>
    <Route  component={Error}/>
  </Switch>
  </>);

};

export default App;
