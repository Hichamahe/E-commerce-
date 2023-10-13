import { configureStore } from "@reduxjs/toolkit";
import globalSlice from './Components/reducer'





const store = configureStore({
    reducer : {
      globalState: globalSlice
    },
})

export default store;