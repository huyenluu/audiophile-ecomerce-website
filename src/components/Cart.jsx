//import { useState } from "react"
import Counter from "./Counter"
import { ButtonDefault } from "../ui/Buttons"

function Cart({cartItems}) {
    const itemsCounter = cartItems.length
    const total = 0
    const getCounter = (counter) => {
        console.log(counter)
    }
    return (
        <div className="bg-white rounded-lg w-[20.4rem] absolute right-0 top-20 text-black py-8 px-[1.75rem] z-[300]
                        flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="text-heading-6 uppercase">
                    <span>Cart </span>
                    <span>({itemsCounter})</span>
                </div>
                <button 
                    className="text-p opacity-50 underline underline-offset-[.5px]"
                >
                    Remove all
                </button>
            </div>
            <ul>
                {cartItems.map(item => (
                    <li className="flex justify-between items-center mb-8">
                        <div>{item.name}</div>
                        <Counter getCounter={getCounter}/>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between items-center">
                <div className="text-p uppercase opacity-50">Total</div>
                <div className="text-heading-6">${total}</div>
            </div>
            <ButtonDefault
                content="checkout"
                className="bg-orange hover:bg-orange-lighter w-full"
                link="/checkout"
            />
        </div>
    )
}

export default Cart
