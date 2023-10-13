import React from 'react'
import {FaStar} from 'react-icons/fa';
import './Home.css';

const Images = [
    {
        url: require('./images/talon1.jpeg'),
        title: 'talon femmes',
        price: 200,
        rating: {
            rate: 3.9
        }
    }, {
        url: require('./images/talon2.jpeg'),
        title: 'talon femmes',
        price: 150,
        rating: {
            rate: 2.7
        }
    }, {
        url: require('./images/talon3.jpeg'),
        title: 'talon femmes',
        price: 250,
        rating: {
            rate: 4.9
        }
    }, {
        url: require('./images/talon4.jpeg'),
        title: 'talon femmes',
        price: 330,
        rating: {
            rate: 5
        }

    },
];


function NewOffre() {
    return (<div className='NewOffre'>
        <div className='title-offre'>
        <h4>NEW OFFRE</h4>
        </div>
        {
        Images.map((item, index) => {
            return (<div className='products'
                key={index}>
                <img src={
                        item.url
                    }
                    alt=''/>

                <div className='info-product'>
                    <h3> {
                        item.title
                    }</h3>
                    <div className='stars'> {
                        [...Array(Math.floor(item.rating.rate))].map((star, index) => {
                            return (<FaStar key={index}
                                style={
                                    {
                                        color: "rgb(255,215,0)",
                                        fontSize: "20px"
                                    }
                                }/>);
                        })
                    } </div>
                    <center>
                        <p> {
                            item.price
                        }$</p>
                    </center>
                </div>
            </div>)
        })
    } </div>)
}
export default NewOffre
