import React from 'react'
import {FaStar} from 'react-icons/fa';
import './Home.css';

const heelImages = [
    {
        url: require('./images/sac1.jpeg'),
        title: 'Handbag',
        price: 200,
        previousPrice: 300,
        rating: {
            rate: 3.9
        }
    },
    {
        url: require('./images/sac2.jpeg'),
        title: 'Handbag',
        price: 150,
        previousPrice: 250,
        rating: {
            rate: 2.7
        }
    },
    {
        url: require('./images/sac3.jpeg'),
        title: 'Handbag',
        price: 250,
        previousPrice: 350,
        rating: {
            rate: 4.9
        }
    },
    {
        url: require('./images/sac4.jpeg'),
        title: 'Handbag',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }

    }, {
        url: require('./images/sac5.jpeg'),
        title: 'Handbag',
        price: 200,
        previousPrice: 300,
        rating: {
            rate: 3.9
        }
    },

];


function Handbag() {

    return (
    <div className="Handbag">
     {
        heelImages.map((item, index) => (<div className='handbag-prod'
            key={index}>
            <img src={
                    item.url
                }
                alt={
                    item.url
                }/> {
            [...Array(Math.floor(item.rating.rate))].map((star, index) => {

                return (<FaStar key={index}
                    style={
                        {
                            color: "rgb(255,215,0)",
                            fontSize: "20px",
                            marginBottom: "10px"
                        }
                    }/>);
            })
        }

            <div className='handbag-info'>
                <h5> {
                    item.title
                }</h5>
                <div className='handbag-price'>
                    <p style={
                        {
                            color: "red",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }
                    }> {
                        item.price
                    }</p>
                    <p>
                        <s> {
                            item.previousPrice
                        }</s>
                    </p>
                </div>
            </div>
        </div>))
    } </div>)
}

export default Handbag
