import React from 'react';

function CartEmpty(): JSX.Element {
    return (
        <div
            className="absolute right-0 top-20 z-[300] flex w-[20.4rem] flex-col items-center justify-center rounded-lg bg-white px-[1.75rem] py-8 text-black
                        sm:w-[23.5rem]"
        >
            <h3 className="text-center text-heading-6">
                Your cart is empty now!
            </h3>
        </div>
    );
}

export default CartEmpty;
