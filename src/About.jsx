import React from 'react';
import giffy from './images/hello.gif'
const About=()=>
{
    return(
        <>
        <h3>This website or rather web pages are meant just for learning purpose of react and their varied usage</h3>
        <img src={giffy} alt="hello future" width='1260px' height='600px'/>
        </>
    );
}
export default About;