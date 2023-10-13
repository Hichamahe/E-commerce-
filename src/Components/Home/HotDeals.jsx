import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {FaStar} from "react-icons/fa"
import './Home.css'


const fadeImages = [
  {
    url: require('./images/black kholala.jpg'),
    title:'T-shirt kholala Black',
    price: 200,
    previousPrice:300,
    rating: {
    rate: 3.9}
  },
  {
url: require('./images/bordeau kholala.jpg'),
    title:'T-shirt kholala brown',
    price: 150,
    previousPrice:250,
        rating: {rate: 2.7}
  },
  {
url: require('./images/orange kholala.jpg'),
    title:'T-shirt kholala orange',
    price: 250,
    previousPrice:350,
    rating: {rate: 4.9}
  },
  {
url: require('./images/green kholala.jpg'),
    title:'T-shirt kholala green',
    price: 330,
    previousPrice:400,
    rating: {rate: 5}

  },
];

function HotDeals() {
  return (
    <div className="slide-container">
    <div className='title-hotdeals'>
    <h4>HOT DEALS</h4>
    <i className="bi bi-arrow-left-right"></i>
    </div>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className ="hotdeals" key={index}>
            <div className='img-hotdeals'>
            <img style={{width: '100%', height:'220px'}} src={fadeImage.url} alt=''/>
            </div>
            <div className='discreption'>
            <div className='discp-hotdeals'>
            <span>{fadeImage.title}</span>
            </div>
            <div className='stars'>
            {[...Array(Math.floor(fadeImage.rating.rate))].map((star, index)=> {        
        return (         
          <FaStar key={index} style={{color:"rgb(255,215,0)", fontSize:"30px", marginBottom:"10px"}}/>       
         );
        })
        }
            </div>
            <div className='price'>
            <h3>{fadeImage.price}$</h3>
            <h5><s>{fadeImage.previousPrice}$</s></h5>
            </div>
          </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default HotDeals