import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// cart constants
export const shippingFee = 20;
export const vatPercentage = 0.1;

type CartPayloadType = {
    id: number;
    name: string;
    price:number;
    image: string;
    quantity: number;
    totalPrice: number;
}
type CartState = {
    cartItems : CartPayloadType[];
}
type DeleteItemAction = {
    payload: number;
};
type ChangeItemQuantityAction = {
    payload: {
        id: number;
        value: number;
    };
};

// get cart state from localStorage if exist
const storedValue = localStorage.getItem('reduxState');
const initialState: CartState = storedValue ? JSON.parse(storedValue).cart : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action:{payload: CartPayloadType}) {

            const existingCartItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingCartItem) {
                // If the item already exists in the cart, update its quantity and totalPrice
                existingCartItem.quantity += action.payload.quantity;
                existingCartItem.totalPrice =
                    existingCartItem.price * existingCartItem.quantity;
            } else {
                // If the item doesn't exist in the cart, add it
                state.cartItems.push(action.payload);
            }
        },
        deleteItem(state, action:DeleteItemAction) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        changeItemQuantity(state, action:ChangeItemQuantityAction) {
            const { id, value } = action.payload;
            const updatedItems = state.cartItems.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: value,
                        totalPrice: item.price * value,
                    };
                }
                return item;
            });
            state.cartItems = updatedItems;
        },
        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const { addItem, deleteItem, changeItemQuantity, clearCart } =
    cartSlice.actions;

export const selectCart = (state:RootState) => state.cart.cartItems;

export const selectTotalCartQuantity = (state:RootState):number =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalCartPrice = (state:RootState):number =>
    state.cart.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

export default cartSlice.reducer;
