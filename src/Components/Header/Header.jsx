import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchTerm, performSearch, hideSearchResults } from '../reducer'

function Header() {
    
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.globalState);
    const searchTerm = useSelector(state => state.globalState.searchTerm);
    const searchResults = useSelector(state => state.globalState.searchResults);
    const showSearchResults = useSelector((state) => state.globalState.showSearchResults);
    const [isListVisible, setIsListVisible] = useState(false);

    const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(updateSearchTerm(value));
    dispatch(performSearch());
    };


    const handleClick = () => {
    setIsListVisible(!isListVisible);
    }

    const handleHideResults = () => {
    dispatch(hideSearchResults());
    };



    return (
    <div className='Header'>

        <div className='head-up'>
            <div className='Select'>
                <select >
                    <option value="Lagues">language</option>
                    <option value="Arabe">Arabe</option>
                    <option value="Frensh">Frensh</option>
                    <option value="English">English</option>
                </select>
                <select>
                    <option value="Devises">Devises</option>
                    <option value="Dollar">Dollar</option>
                    <option value="Euro">Euro</option>
                    <option value="MAD">MAD</option>
                </select>
            </div>
            <div className='Navbar-up'>
                <nav>
                    <ul className='Nav-Link'>
                        <Link to="/Cart">
                            <li>MyCart</li>
                        </Link>
                        <Link to="/CheckOut">
                            <li>CheckOut</li>
                        </Link>
                        <Link to="/LogIn">
                            <li>LogIn</li>
                        </Link>
                    </ul>
                </nav>

            </div>
        </div>
        <div className='head-middle'>
            <div className="logo">
                <h3>SHOPPING<span className="last-three-letters">HOME</span></h3>
            </div>

            <div className="search">
                <input type="search" placeholder="Search Hear..." value={searchTerm} onChange={handleInputChange} />
                <FaSearch className="search-icon" />
                {showSearchResults   && searchTerm !== '' && (
                <div className='Results'>
                      <ul>
                {searchResults.map((product) => (
          <li key={product.id}>
          { product.id <= 9 
          ? <Link to={`/clothing/${product.id}`} onClick={handleHideResults}>{product.title}</Link>
          : product.id >= 10 && product.id <= 17
          ?  <Link to={`/Electronic/${product.id}`} onClick={handleHideResults}>{product.title}</Link>
          : product.id >= 18 && product.id <= 25
          ? <Link to={`/Watches/${product.id}`} onClick={handleHideResults}>{product.title}</Link>
          : <Link to={`/Shoes/${product.id}`} onClick={handleHideResults}>{product.title}</Link>
          }
          </li>
            ))}
             </ul>
                </div>
                )
                }
            </div>
            <div className='cart'>
                <Link to="/Cart">
                    <i className="bi bi-cart-fill">{cartItems.length}</i>
                </Link>
            </div>
        </div>
        <div className='head-down'>
            <div className='Navbar-down d-flex'>
              <div className= "Navbar-menu"  onClick={handleClick} >   
                 <div className="line"></div>
                 <div className="line"></div>
                 <div className="line"></div>
                 {isListVisible && (
                   <ul className='list-group'>
                   <Link to="/Home" ><li className='list-group-item'>Home</li></Link>
                     <Link to="/Clothing" ><li className='list-group-item'>Clothing</li></Link>
                     <Link to="/Electronics" ><li className='list-group-item'>Electronics</li></Link>
                     <Link to="/Watches" ><li className='list-group-item'>Watches</li></Link>
                     <Link to="/Shoes" ><li className='list-group-item'>Shoes</li></Link>
                     <Link to="/Contact" ><li className='list-group-item'>Contact</li></Link>
                     <Link to="/MyCart"><li className='list-group-item'>MyCart</li></Link>
                     <Link to="/CheckOut"><li className='list-group-item'>CheckOut</li></Link>
                     <Link to="/LogIn"><li className='list-group-item'>LogIn</li></Link>
                   </ul>
                   )}
              </div>

                <nav className='second-nav'>
                    <ul className='Nav-Link'>
                        <Link to="/Home"><li>Home</li></Link>
                        <Link to="/Clothing"><li>Clothing</li></Link>
                        <Link to="/Electronics"><li>Electronics</li></Link>
                        <Link to="/Watches"><li>Watches</li></Link>
                        <Link to="/Shoes"><li>Shoes</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default Header
