import React from 'react'
import {motion} from 'framer-motion'
import './Home.css'
import {useRef, useEffect, useState} from 'react';

const SlideImages = [
    {
        url: require('./images/black imazighn.jpg'),
        title: 'T-shirt imazighen Black',
        price: 200,
        previousPrice: 300,
        rating: {
            rate: 3.9
        }
    },
    {
        url: require('./images/bleu imazighn.jpg'),
        title: 'T-shirt imazighen Blue',
        price: 150,
        previousPrice: 250,
        rating: {
            rate: 2.7
        }
    },
    {
        url: require('./images/green imazighn.jpg'),
        title: 'T-shirt imazighen Green',
        price: 250,
        previousPrice: 350,
        rating: {
            rate: 4.9
        }
    },
    {
        url: require('./images/bordeau imazighn.jpg'),
        title: 'T-shirt imazighen brown',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }

    }, {
        url: require('./images/gris imazighn.jpg'),
        title: 'T-shirt imazighen gray',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }
    }, {
        url: require('./images/purpel imazighn.jpg'),
        title: 'T-shirt imazighen purpel',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }
    }, {
        url: require('./images/red imazighn.jpg'),
        title: 'T-shirt imazighen red',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }
    }, {
        url: require('./images/gris chiné imazighn.jpg'),
        title: 'T-shirt imazighen gray',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }
    }, {
        url: require('./images/pistache imazighn.jpg'),
        title: 'T-shirt imazighen green',
        price: 330,
        previousPrice: 400,
        rating: {
            rate: 5
        }
    },
];

function NewDeals() {

    const carouselRef = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {

        if (document.body.style.maxWidth === '990px') {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
        } else {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 5)
        }


    }, [])

    return (<motion.div className="carousel"
        ref={carouselRef}>
        <motion.div className="inner-carousel" drag="x"
            dragConstraints={
                {
                    right: 0,
                    left: -width
                }
        }> {
            SlideImages.map((item, index) => {
                return (<div className='product' key={index}>
                    <motion.div className='item'
                        >
                        <img src={
                                item.url
                            }
                            alt=''/>
                    </motion.div>
                    <motion.div className='disc'>
                        <p> {
                            item.title
                        }</p>
                    </motion.div>
                    <motion.div className='discTow'>
                        <p style={
                            {
                                color: "red",
                                fontSize: "20px",
                                fontWeight: "bold"
                            }
                        }> {
                            item.price
                        }$</p>
                        <s> {
                            item.previousPrice
                        }$</s>
                    </motion.div>
                </div>)
            })
        } </motion.div>
    </motion.div>)


}

export default NewDeals
