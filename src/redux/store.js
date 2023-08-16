import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

// const persistedState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    //preloadedState: persistedState,
})

store.subscribe(()=>{
    console.log(store.getState())
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store