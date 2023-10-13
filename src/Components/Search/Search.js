// import React from 'react'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import { useSelector } from 'react-redux';


// function Search() {

//       const {FilterdProduct} = useSelector(state => state.cart)

      
//   return (
//     <>
//     <Header />
//     <div className="row">
//     {
//       FilterdProduct.map((clothe, index)=>(

//     <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
//     <div className="card" >
//     <img src={`${clothe.image}`} className="card-img-top" alt={clothe.image} />
//     <div className="card-body">
//     <h5 className="card-title">{clothe.title}</h5>
//     <p className="card-text"><small className="text-muted">{clothe.price}$</small></p>
//     <button href="" className="btn btn-primary">Ajouter au Panier</button>
//   </div>
//     </div>
//     </div>
//     ))
//     }
// </div>
//     <Footer />
//     </>
//   )
// }

// export default Search