import { ButtonDefault } from "../../ui/Buttons"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { clearCart, getCart, getTotalCartPrice, getTotalCartQuantity } from "../../redux/cartSlice"

function Cart() {
    const cartItems = useSelector(getCart)
    const totalPrice = useSelector(getTotalCartPrice)
    const totalQuantity = useSelector(getTotalCartQuantity)
    const dispatch = useDispatch()

    return cartItems.length > 0 ? (
            <div className="bg-white rounded-lg w-[20.4rem] absolute right-0 top-20 text-black py-8 px-[1.75rem] z-[300]
                            flex flex-col gap-6 sm:w-[23.5rem]">
                <div className="flex justify-between">
                    <div className="text-heading-6 uppercase">
                        <span>Cart </span>
                        <span>({totalQuantity})</span>
                    </div>
                    <button 
                        className="text-p opacity-50 underline underline-offset-[.5px]"
                        onClick={() => dispatch(clearCart())}
                    >
                        Remove all
                    </button>
                </div>
                <ul>
                    {cartItems.map((item, index) => (
                        <CartItem key={item.name} item={item} index ={index} isCounterNeeded/>
                    ))}
                </ul>

                <div className="flex justify-between items-center">
                    <div className="text-p uppercase opacity-50">Total</div>
                    <div className="text-heading-6">${totalPrice}</div>
                </div>
                <ButtonDefault
                    content="checkout"
                    className="bg-orange hover:bg-orange-lighter w-full"
                    link="/checkout"
                />
            </div>

        ):(
            <CartEmpty/>
        )
}

export default Cart
