import './App.css';
import MyAccount from './Components/MyAccount';
import Cart from './Components/Cart';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home';
import Clothing from './Components/clothing/clothing';
import Electronic from './Components/Electronic/Electronic';
import Watches from './Components/watches/Watches';
import Shoes from './Components/shoses/Shoes';
import Contact from './Components/contact/Contact';
import SingleClothes from './Components/clothing/SingleClothes';
import SingleElectronic from './Components/Electronic/singleElectronic';
import SingleShoeses from './Components/shoses/SingleShoeses';
import Search from './Components/Search/Search';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import SingleWatche from './Components/watches/SingleWatche';




function App() {
 


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/MyAccount' element={<MyAccount />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/CheckOut' element={<LogIn />} />
      <Route path='/LogIn' element={<LogIn />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Clothing' element={<Clothing />} />
      <Route path='/Clothing/:id' element={<SingleClothes />} />
      <Route path='/Electronics' element={<Electronic />} />
      <Route path='/Electronic/:id' element={<SingleElectronic />} />
      <Route path='/Watches' element={<Watches />} />
      <Route path='Watches/:id' element={<SingleWatche />} />
      <Route path='/Shoes' element={<Shoes />} />
      <Route path='Shoes/:id' element={<SingleShoeses />} />
      <Route path='/Contact' element={<Contact />} /> 
      <Route path='/Search' element={<Search />} />        
      </Routes>
   </BrowserRouter>
   
  );
}

export default App;
