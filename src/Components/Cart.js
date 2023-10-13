import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import { RemoveFromCart, AddToCart} from './reducer';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';



const Cart = () => {
  const {cartItems} = useSelector((state) => state.globalState);
  

  const dispatch = useDispatch();


  const HandleAddToCart = (Product)=>{
   dispatch(AddToCart(Product))

        let cookieData = [];
    if (Cookies.get('cartProducts')) {
      cookieData = JSON.parse(Cookies.get('cartProducts'));
    }
    cookieData.push(Product);
    Cookies.set('cartProducts', JSON.stringify(cookieData));
     
  }

    const handleRemoveFromCart = (productId) => {
    dispatch(RemoveFromCart(productId));
  };
  
    
  return (
    <>
    <Header />
    <div className='cartProd' style={{
      minHeight:"360px",
            display:"flex",
      justifyContent:"center",
      alignItems:"center"
      }}>
      
    {
    cartItems.length === 0 ?
    <p style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      }}>Your Cart Is Empty</p> :
      
      <div className='row my-4'>
      <div className='col-md-12 p-sm-0 m-sm-0'>
      <div className='card'>
      <div className='card-body'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">title</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Subtotal</th>
      
    </tr>
  </thead>
  <tbody>
   {
    cartItems.map(item =>(
         <tr key={item.id}>
      <td><img src={`${item.image}`} alt={item.title} style={{width:"100px", height:"100px"}}/></td>
      <td>{item.title}</td>
      <td>
      <i className="bi bi-caret-up" onClick={() => {HandleAddToCart(item)}} style={{cursor:"pointer"}} /> 
      {item.quantity} 
      <i className="bi bi-caret-down" onClick={() => handleRemoveFromCart(item.id)} style={{cursor:"pointer"}} />
      </td>
      <td>{item.price}</td>
      <td>{item.price * item.quantity}</td>
      <td><i className="bi bi-trash text-danger" onClick={() => handleRemoveFromCart(item.id)} style={{cursor:"pointer"}} ></i></td>
    </tr>
    ))
  }
    <tr>
      <th colSpan={3} className='text-center'>Total</th>
      <td colSpan={3} className='text-center'>
      <span className='rounded-pill text-bg-danger'>{cartItems.reduce((acc, item)=>acc+= item.price * item.quantity, 0)}$</span>  
      </td>
    </tr>
    <tr>
      <th colSpan={6} className='text-center'><Button>Submit</Button></th>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
    }
    
    </div>
    <Footer />
    </>
  );
};

export default Cart;

