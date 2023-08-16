import { useState } from "react"
import { ButtonDefault } from "./Buttons"

function CheckoutConfirmationModal({cartItems,itemsNo, grandTotal, orderId}) {
    const firstItemArr = cartItems.slice(0,1)
    const [displayedItems, setDisplayedItems] = useState(firstItemArr)
    return (
        <div className="w-[calc(99%_-_48px)] max-w-[33.75rem] bg-white rounded-lg p-6 sm:p-12 
                        z-[300] absolute top-60 left-1/2 -translate-x-1/2">
            <img
                src="/assets/checkout/icon-order-confirmation.svg"
                className="w-16 h-16 fill-orange mb-6"
                alt="order confirmation icon"
            />
            <h1 className="text-heading-5 sm:text-heading-3 mb-4">Order #{orderId} has been inregistrated</h1>
            <p className="text-p opacity-50 sm:mb-8">You will receive an email confirmation shortly.</p>
            <div className="rounded-lg bg-white mb-6 sm:mb-12 sm:flex">
                <div className="p-6 pb-0 sm:w-[60%]">
                    <div className="border-b border-b-gray-300">
                        {displayedItems.map(item => (
                            <li key={item.name} className="justify-between items-center mb-8 flex">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-16 h-16 rounded-lg'
                                />
                                <div className='flex flex-col items-start flex-1 ml-6'>
                                    <div className='text-p font-bold uppercase'>{item.name}</div>
                                    <div className='text-button opacity-50'>${item.price}</div>
                                </div>
                                <div className='text-p font-bold opacity-50'>x{item.quantity}</div>
                            </li>
                        ))}
                    </div>
                    {displayedItems.length === 1 && <div 
                        className="p-3 sm:p-6 text-center opacity-50 font-bold text-sm cursor-pointer"
                        onClick={() => setDisplayedItems(cartItems)}
                    >
                        and other {itemsNo - 1} item(s)
                    </div>}
                    {displayedItems.length > 1 && <div 
                        className="p-3 sm:p-6 text-center opacity-50 font-bold text-sm cursor-pointer"
                        onClick={() =>{setDisplayedItems(firstItemArr)}}
                    >
                        view less
                    </div>}
                </div>
                <div className="bg-black rounded-b-lg text-white p-6 sm:w-[40%] sm:rounded-r-lg sm:rounded-bl-none flex flex-col justify-end">
                    <div className="text-p uppercase">Grand Total</div>
                    <div className="text-heading-6">${grandTotal}</div>
                </div>
            </div>
            <ButtonDefault
                content="back to home"
                link='/'
                className="bg-orange hover:bg-orange-lighter w-full"
            />
        </div>
    )
}

export default CheckoutConfirmationModal
