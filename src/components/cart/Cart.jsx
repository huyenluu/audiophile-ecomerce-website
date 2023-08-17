import { ButtonDefault } from '../../ui/Buttons';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearCart,
    getCart,
    getTotalCartPrice,
    getTotalCartQuantity,
} from '../../redux/cartSlice';

function Cart() {
    const cartItems = useSelector(getCart);
    const totalPrice = useSelector(getTotalCartPrice);
    const totalQuantity = useSelector(getTotalCartQuantity);
    const dispatch = useDispatch();

    return cartItems.length > 0 ? (
        <div
            className="absolute right-0 top-20 z-[300] flex w-[20.4rem] flex-col gap-6 rounded-lg bg-white
                            px-[1.75rem] py-8 text-black sm:w-[23.5rem]"
        >
            <div className="flex justify-between">
                <div className="text-heading-6 uppercase">
                    <span>Cart </span>
                    <span>({totalQuantity})</span>
                </div>
                <button
                    className="text-p underline underline-offset-[.5px] opacity-50"
                    onClick={() => dispatch(clearCart())}
                >
                    Remove all
                </button>
            </div>
            <ul>
                {cartItems.map((item, index) => (
                    <CartItem
                        key={item.name}
                        item={item}
                        index={index}
                        isCounterNeeded
                    />
                ))}
            </ul>

            <div className="flex items-center justify-between">
                <div className="text-p uppercase opacity-50">Total</div>
                <div className="text-heading-6">${totalPrice}</div>
            </div>
            <ButtonDefault
                content="checkout"
                className="w-full bg-orange hover:bg-orange-lighter"
                link="/checkout"
            />
        </div>
    ) : (
        <CartEmpty />
    );
}

export default Cart;
