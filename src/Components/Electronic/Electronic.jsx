import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import  './Electronic.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AddToCart } from '../reducer';



function Electronic() {
  const {electronics} = useSelector(state=>state.globalState.products)

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
                <div className='home-electronics'>
                    <h5>TOPBRANDS</h5>
                    <h1>NEW COLLECTION</h1>
                    <p>Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit</p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
    </div>
    </div>
    <div className='row'>
    {
        electronics.map((Item, index)=>(
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
   <div className="card" >
   <Link to={`/Electronic/${Item.id}`}>
  <img src={`${Item.image}`} className="card-img-top" alt={Item.image} />
  </Link>
  <div className="card-body">
    <h5 className="card-title">{Item.title}</h5>
    <p className="card-text"><small className="text-muted">{Item.price}$</small></p>
    <button href="" className="btn btn-primary" onClick={() => {HandleAddToCart(Item)}}>Ajouter au Panier</button>
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

export default Electronic