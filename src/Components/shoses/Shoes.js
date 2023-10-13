import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './shoses.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AddToCart } from '../reducer';

function Shoes() {
  const {shoes} = useSelector(state=>state.globalState.products)
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
                <div className='home-shoes'>
                    <h5>TOPBRANDS</h5>
                    <h1>NEW COLLECTION</h1>
                    <p>Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit</p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
    </div>
    </div>
    <div className='row'>
      {
       shoes.map((item, index)=>(
          <div className='col-lg-3 col-md-4 col-sm-6 mt-1 mb-1' key={index}>
             <div className="card" >
                <Link to={`${item.id}`}>
                <img src={`${item.image}`} className="card-img-top" alt={item.image} />
                </Link>
             <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><small className="text-muted">{item.price}$</small></p>
                <button href="" className="btn btn-primary" onClick={() => {HandleAddToCart(item)}}>Ajouter au Panier</button>
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

export default Shoes