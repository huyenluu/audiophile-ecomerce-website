
import { createSlice } from "@reduxjs/toolkit"

// cart constants
export const shippingFee = 20;
export const vatPercentage = 0.1;


// get cart state from localStorage if exist 
const storedValue = localStorage.getItem('reduxState');
const initialState = () => storedValue ? JSON.parse(storedValue).cart : {cartItems:[]};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // action.payload = {
            //     id: data.id,
            //     name: data.name,
            //     price: data.price,
            //     image: data.image.mobile,
            //     quantity: 1,
            //     totalPrice: data.price * 1,
            // }
            
            const existingCartItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingCartItem) {
                // If the item already exists in the cart, update its quantity and totalPrice
                existingCartItem.quantity += 1;
                existingCartItem.totalPrice = existingCartItem.price * existingCartItem.quantity;
            } else {
                // If the item doesn't exist in the cart, add it
                state.cartItems.push(action.payload);
            }


        },
        deleteItem(state, action) {
            // id = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        changeItemQuantity(state, action) {
            const {id, value} = action.payload
            const updatedItems = state.cartItems.map(item => {
                if (item.id === id) {
                  return { 
                    ...item, 
                    quantity: value,
                    totalPrice: item.price * value,
                };
                }
                return item;
            });
            state.cartItems = updatedItems
        },
        clearCart(state) {
            state.cartItems = [];
        },
    }
})

export const { 
    addItem,
    deleteItem,
    changeItemQuantity,
    clearCart,
} = cartSlice.actions

export const getCart = (state) => state.cart.cartItems;

export const getTotalCartQuantity = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

export default cartSlice.reducer

