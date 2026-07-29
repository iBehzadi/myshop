import { configureStore } from "@reduxjs/toolkit";
import cart from './Slices/cartStore'
const store = configureStore({
    reducer:{
        cart
    }
})
export default store