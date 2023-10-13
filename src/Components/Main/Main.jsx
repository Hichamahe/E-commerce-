import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Main.css';


function Main() {
  const [isListVisible, setListVisible] = useState(true);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className='main'>
    <button className="bg-warning m-0" onClick={handleButtonClick}><i className="bi bi-list"></i>Categories</button>
    {isListVisible && (
    <ul className='list-group'>
    <Link to="/Clothing" ><li className='list-group-item'>Clothing</li></Link>
    <Link to="/Electronics" ><li className='list-group-item'>Electronics</li></Link>
    <Link to="/Blog" ><li className='list-group-item'>Blog</li></Link>
    <Link to="/Watches" ><li className='list-group-item'>Watches</li></Link>
    <Link to="/Shoes" ><li className='list-group-item'>Shoes</li></Link>
    <Link to="/Page" ><li className='list-group-item'>Page</li></Link>
    <Link to="/Contact" ><li className='list-group-item'>Contact</li></Link>
     </ul>
    )}
   
    </div>
  )
}

export default Main