import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './watches.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AddToCart } from '../reducer';

function Watches() {
  const {watches} = useSelector(state=>state.globalState.products)
    const dispatch = useDispatch();

    const HandleAddToCart = (Product)=>{
    dispatch(AddToCart(Product))
    }
    
  return (
    <>
    <Header />
    <div className="container">
    <div className='row'>
        <div className="col-12">
                <div className='home-watch'>
                    <h5>TOPBRANDS</h5>
                    <h1>NEW COLLECTION</h1>
                    <p>Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit</p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
    </div>
    </div>
    <div className='row'>
      {
        watches.map((watch, index)=>(
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
             <div className="card" >
                <Link to={`${watch.id}`}>
                <img src={`${watch.image}`} className="card-img-top" alt={watch.image} />
                </Link>
             <div className="card-body">
                <h5 className="card-title">{watch.title}</h5>
                <p className="card-text"><small className="text-muted">{watch.price}$</small></p>
                <button href="" className="btn btn-primary" onClick={() => {HandleAddToCart(watch)}}>Ajouter au Panier</button>
              </div>
             </div>
          </div>
        ))
      }
    </div>
    </div>
    <Footer />
  </>
    
  )
}

export default Watches