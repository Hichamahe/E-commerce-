import React from 'react'
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart } from '../reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function SingleShoeses() {
    const {id} = useParams();
const {shoes} = useSelector(state=>state.globalState.products)
const product = shoes.find((p)=>p.id===parseInt(id));

  const dispatch = useDispatch();

    const HandleAddToCart = (Product)=>{
    dispatch(AddToCart(Product))
  }
  return (
                <>
        <Header />
        <div className='container'>
        <div className='row'>
        <div className='col-6 d-flex justify-content-center'>
        <div className="card" style={{width: "18rem"}}>
        <img src={`${product.image}`} className="card-img-top" alt={`${product.image}`} />
        </div>
        </div>
        <div className='col-6 d-flex'>
          <div className="cardsingle">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}$</p>
            <p className="card-text">{product.disc}</p>
            <button href="" className="btn btn-primary" onClick={() => {HandleAddToCart(product)}}>Add to Card</button>
           </div>
        </div>
        </div>
        </div>
        <Footer />
        </>
  )
}

export default SingleShoeses