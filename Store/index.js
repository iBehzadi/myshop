import { configureStore } from "@reduxjs/toolkit";
import cart from './Slices/cartSlice'
import auth from './Slices/authSlice'
const store = configureStore({
    reducer:{
        cart,auth
    }
})
export default store