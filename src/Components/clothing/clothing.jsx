import React from "react"
import { useSelector } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './clothing.css'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../reducer';
import { Link } from "react-router-dom";



function Clothing() {
  
  const {clothes} = useSelector(state=>state.globalState.products)
 
  const dispatch = useDispatch();

    const HandleAddToCart = (Product)=>{
    dispatch(AddToCart(Product))
  }


  return (
    <>
    <Header />
    <div className="container">
    <div className="row">
    <div className="col-12">
                <div className='home-clothing'>
                    <h5>TOPBRANDS</h5>
                    <h1>NEW COLLECTION</h1>
                    <p>Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit</p>
                    <button className='btn btn-primary'>SHOP NOW</button>
                </div>
    </div>
    </div>
    <div className="row">
    {
      clothes.map((clothe, index)=>(

    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
    <div className="card" >
    <Link to={`/clothing/${clothe.id}`}>
    <img src={`${clothe.image}`} className="card-img-top" alt={clothe.image} />
    </Link>
    <div className="card-body">
    <h5 className="card-title">{clothe.title}</h5>
    <p className="card-text"><small className="text-muted">{clothe.price}$</small></p>
    <button href="" className="btn btn-primary" onClick={() => {HandleAddToCart(clothe)}}>Ajouter au Panier</button>
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

export default Clothing