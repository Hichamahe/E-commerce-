import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


const globalSlice = createSlice({
  name: 'globalState',
  initialState : {
  products : {
clothes : [
        {id:1, title:"Chemise Bleu homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:100, image:require('../image/chemise1.jpg')},
        {id:2, title:"chemise blache homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:200, image:require('../image/chemise2.jpg')},
        {id:3, title:"chemise beige homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:300, image:require('../image/chemise3.jpg')},
        {id:4, title:"jecket noir homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:500, image:require('../image/jacket1.jpg')},
        {id:5, title:"jecket noir homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:700, image:require('../image/jacket2.jpg')},
        {id:6, title:"jacket homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:1000, image:require('../image/jacket3.jpg')},
        {id:7, title:"pontalon gris homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:150, image:require('../image/pont1.jpg')},
        {id:8, title:"pontalon geans homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:350, image:require('../image/pont2.jpg')},
        {id:9, title:"pontalon gris sport homme", disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit", price:200, image:require('../image/pont3.jpg')}
        ],

    electronics : [
        {id:10,title:"iphone 14 normal",price:1500,image: require('./Electronic/image/14normal.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:11,title:"iphone 14 Pro Max",price:2000,image:require('./Electronic/image/14promax.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:12,title:"camera ",price:2000,image:require('./Electronic/image/camera.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:13,title:"headphone",price:1000,image:require('./Electronic/image/headphone.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:14,title:"Mac 13",price:2000,image:require('./Electronic/image/mac.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:15,title:"PC asus",price:900,image:require('./Electronic/image/pc asus.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:16,title:"Play Station 5",price:1000,image:require('./Electronic/image/play station 5.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:17,title:"Air Pouds",price:700,image:require('./Electronic/image/Airpouds.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"}],

    watches :[
        {id:18,title:"Smart watch",price:100, image:require('./watches/image/watch 1.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:19,title:"Rolex",price:200, image:require('./watches/image/watch  2.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:20,title:"Citizen",price:250, image:require('./watches/image/watch 3.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:21,title:"Rolex",price:300, image:require('./watches/image/watch 4.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:22,title:"Citizen PCAT 43",price:400, image:require('./watches/image/watch 5.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:23,title:"Omega",price:600, image:require('./watches/image/watch 6.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:24,title:"smart watch",price:1200, image:require('./watches/image/smart watch 1.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:25,title:"smart watch",price:1000, image:require('./watches/image/smart watch 2.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"}],
    
    shoes :[
        {id:26, title:"adidas f50", price:300, image:require('./shoses/image/adidas f50.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:27,title:"mercurial vapor 14", price:400, image:require('./shoses/image/mercurial vapor 14.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:28,title:"nike jordan 1", price:450, image:require('./shoses/image/nike jordan 1.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:29,title:"nike jordan 3", price:500, image:require('./shoses/image/nike jordan 3.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:30,title:"air max 90", price:600, image:require('./shoses/image/air max 90.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:31,title:"vans", price:800, image:require('./shoses/image/vans.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:32,title:"puma suede classic", price:1000, image:require('./shoses/image/puma suede classic.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"},
        {id:33,title:"air force", price:1200, image:require('./shoses/image/air force.jpg'),disc:"Lorem lpsum, Dolor sit Amet Consecteture Adepsicing Elit"}],
    },

  cartItems: [],
  searchTerm:'',
  searchResults:[],
  showSearchResults: false,
  selectedProduct: null,
   
},
  reducers: {
    AddToCart: (state, action) => {
     const newProduct = action.payload;
     const existingProductIndex = state.cartItems.findIndex((product) => product.id === newProduct.id);
      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].quantity += 1;
      } else {
          state.cartItems.push({ ...newProduct, quantity: 1 });
      }
      // Get the current cart products from cookies
      let cookiesValue;
      if (Cookies.get('cartProducts')) {
        cookiesValue = JSON.parse(Cookies.get('cartProducts'));
      }
      // Add the new product to the cart products in cookies
      if (!cookiesValue) {
        Cookies.set('cartProducts', JSON.stringify([newProduct]));
      } else {
        Cookies.set('cartProducts', JSON.stringify([...cookiesValue, newProduct]));
      }
    },

    RemoveFromCart: (state, action) => {
            const productId = action.payload;
      const existingProductIndex = state.cartItems.findIndex(
        (product) => product.id === productId
      );
      if (existingProductIndex !== -1) {
        const existingProduct = state.cartItems[existingProductIndex];
        if (existingProduct.quantity === 1) {
          state.cartItems.splice(existingProductIndex, 1);
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },

    AddToCartLoad: (state, action) => {
    state.cartItems = action.payload
    },

    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    performSearch: (state) => {
       const searchTerm = state.searchTerm.toLowerCase();
       const allProducts = Object.values(state.products).flat();
       state.searchResults = allProducts.filter((product) => {
        return (
       product.title.toLowerCase().includes(searchTerm)  
    )
  });
  state.showSearchResults = true;
    },

    hideSearchResults: (state) => {
      state.showSearchResults = false;
    },
  }
});

export const { AddToCart, 
  RemoveFromCart, 
  AddToCartLoad,
  updateSearchTerm,
  performSearch,
  hideSearchResults,
} = globalSlice.actions;

export default globalSlice.reducer;

