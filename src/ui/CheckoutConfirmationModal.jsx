import { useState } from "react";
import { ButtonDefault } from "./Buttons";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

function CheckoutConfirmationModal({
  cartItems,
  itemsNo,
  grandTotal,
  orderId,
}) {
  const firstItemArr = cartItems.slice(0, 1);
  const [displayedItems, setDisplayedItems] = useState(firstItemArr);
  const dispatch = useDispatch();
  return (
    <div
      className="fixed left-1/2 top-1/2 z-[300] w-[calc(99%_-_48px)] max-w-[33.75rem] 
                        -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 sm:px-8 sm:py-12"
    >
      <img
        src="/assets/checkout/icon-order-confirmation.svg"
        className="mb-6 h-16 w-16 fill-orange"
        alt="order confirmation icon"
      />
      <h1 className="mb-4 text-heading-5 sm:text-heading-4">
        Order #{orderId} has been submitted
      </h1>
      <p className="text-p opacity-50 sm:mb-8">
        You will receive an email confirmation shortly.
      </p>
      <div className="mb-6 rounded-lg bg-white sm:mb-12 sm:flex">
        <div className="p-6 pb-0 sm:w-[60%]">
          <div className={itemsNo > 1 && "border-b border-b-gray-300"}>
            {displayedItems.map((item) => (
              <li
                key={item.name}
                className="mb-8 flex items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg"
                />
                <div className="ml-6 flex flex-1 flex-col items-start">
                  <div className="text-p font-bold uppercase">{item.name}</div>
                  <div className="text-button opacity-50">${item.price}</div>
                </div>
                <div className="text-p font-bold opacity-50">
                  x{item.quantity}
                </div>
              </li>
            ))}
          </div>
          {(itemsNo > 1 && displayedItems.length === 1) && (
            <div
              className="cursor-pointer p-3 text-center text-sm font-bold opacity-50 sm:p-6"
              onClick={() => setDisplayedItems(cartItems)}
            >
              and other {itemsNo - 1} item(s)
            </div>
          )}
          {(itemsNo > 1 && displayedItems.length > 1) && (
            <div
              className="cursor-pointer p-3 text-center text-sm font-bold opacity-50 sm:p-6"
              onClick={() => {
                setDisplayedItems(firstItemArr);
              }}
            >
              view less
            </div>
          )}
        </div>
        <div className="flex flex-col justify-end rounded-b-lg bg-black p-6 text-white sm:w-[40%] sm:rounded-r-lg sm:rounded-bl-none">
          <div className="text-p uppercase">Grand Total</div>
          <div className="text-heading-6">${grandTotal}</div>
        </div>
      </div>
      <ButtonDefault
        content="back to home"
        link="/"
        className="w-full bg-orange hover:bg-orange-lighter"
        onClick={() => dispatch(clearCart())}
      />
    </div>
  );
}

export default CheckoutConfirmationModal;
