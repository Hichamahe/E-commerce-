import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <div className='Footer'>
    <div className='row w-100'>

    <div className='col-md-4 col-lg-3 col-sm-6 col-xs-12'>
        <div className='shoping'>
        <h5>SHOPPING<span className="last-three-letters">HOME</span></h5>
            <p>Whether you're looking for men's running shoes or women's running shoes, 
            you'll find them at Brooks. With a wide variety of sports shoes, 
            you will always end up finding the pair that suits you perfectly.</p>
        </div>
    </div>

    <div className='col-md-4 col-lg-3 col-sm-6 col-xs-12'>
        <div div className='collection'>
        <h5>COLLECTION</h5>
        <p>Summer</p>  
        <p>winter</p>
        <p>autumn</p>
        </div>
    </div>

    <div className='col-md-4 col-lg-3 col-sm-6 col-xs-12'>
        <div className='contact'>
        <h5>CONTACT</h5>
        <p>55 Rue mohammed laaroussi ESC 16 ETG 4</p>
        <p>hichamahendam@gmail.com</p>
        </div>
    </div>

    <div className='col-md-4 col-lg-3 col-sm-6 col-xs-12'>
        <div className='peyment'>
        <h5>PEYMENT METHODE</h5>
            <p>master card</p>
            <p>paypal</p>
            <p>visa</p>
        </div>
    </div>

    </div>
    </div>
    )
}
export default Footer
