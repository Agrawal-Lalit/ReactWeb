import React from "react";
import pic13 from "./images/icons8-github-30.png"; 
import {NavLink } from "react-router-dom";
const Menu=()=>
{
return(
<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src={pic13} alt="" width="30" height="24" class="d-inline-block align-top"></img>
            <NavLink className="navbar-brand " to="/">Code4U</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-12 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/connect">Connect</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/cards">Cards</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</>);
};
export default Menu;