import React from 'react';
import './Cards.css';
function Cards(props)
{
  return (
  <div className='cards'>
    <img src={props.link} alt="card" ></img>
    <h2>{props.title}</h2>
    <p>{props.brief}</p>
</div>
  );
}
export default Cards;
