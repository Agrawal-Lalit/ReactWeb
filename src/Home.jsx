import React from 'react';
import web from './images/1398314.jpg';
const Home=()=>
{
    return(
        <div className="main-home">
        <h2>Let's Build More With React here with
        <div className="brand-name">code4U</div></h2>
        <div className="container">
  <div className="row align-items-center">
    <div className="col">
    <h3>Environmental SetUp</h3>
    <div>
        <ul className="list-group-item list-group-item-info">

        <li>Installation of node package manager aka npm</li>
        <li>install create-react-app globally using 'npm install -g create-react-app'</li>
        Assuming our current working folder where we want our app be D:/
        <li>write on cmd -'create-react-app firstapp'</li>
        <li>A new react-app named firstapp will be created in our 'D:/'</li>
        <li>Now enjoy coding</li>
        </ul>
    </div>
    </div>
    <div className="col">
      <h3>Stay Tuned for more</h3>
    </div>
  </div>
  
</div>
<img src={web} alt="web" width='1260px' height='400px'/>
        </div>
    );
}
export default  Home;