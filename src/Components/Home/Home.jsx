import React from 'react'
import Main from '../Main/Main'
import './Home.css'
import HotDeals from './HotDeals'
import NewDeals from './NewDeals'
import NewOffre from './NewOffre'
import Handbag from './Handbag'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Home() {
    return (
    <>
    <Header />
    <div className="container">
        <div className='row'>
            <div className='col-lg-3 col-md-3 p-0 m-0'
                style={
                    {marginBottom: "15px"}
            }>
                <Main/>
            </div>
            <div className='col-lg-9 col-md-9 p-0 m-0'>
                <div className='home-info'>
                    <h5>TOPBRANDS</h5>
                    <h1>NEW COLLECTION</h1>
                    <p>Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit</p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
            </div>
        </div>
        <div className='row pb-1'>
            <div className='col-md-4 col-sm-4 col-lg-3 bg-body mt-1 '>
                <HotDeals/>
            </div>
            <div className='col-md-8 col-sm-8 col-lg-9 bg-body mt-1'>
                <div className='title-newdeals'>
                    <h4>
                        NEW DEALS
                    </h4>
                    <i className="bi bi-arrow-left-right"></i>

                </div>
                <NewDeals/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-9 col-md-9 bg-body p-0'>
                <div className='second-info'>
                    <h5>
                        TOPBRANDS
                    </h5>
                    <h1>NEW COLLECTION</h1>
                    <p>
                        Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit
                    </p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
                <div className='title-bag'>
                <h4>NEW & WOMEN BAG</h4>
                <i className="bi bi-arrow-left-right"></i>
                </div>
                <Handbag/>
            </div>
            <div className='new-offre col-md-3 col-lg-3 bg-body p-0'>
                <NewOffre/>
            </div>

        </div>
        </div>
        <Footer />

    </>)
}

export default Home
