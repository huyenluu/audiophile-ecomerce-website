import React from 'react';
import Counter from '../Counter';

type CartItemProps = {
    item: {
        image: string;
        name: string;
        price: number;
        quantity: number;
        id: string
    },
    index: number,
    isCounterNeeded?: boolean,
}

const CartItem : React.FC<CartItemProps> = ({ item, index, isCounterNeeded }) => {
    const imageUrl = item.image.substring(1);
    return (
        <li
            key={item.name + index}
            className="mb-8 flex items-center justify-between last:mb-2"
        >
            <img
                src={imageUrl}
                alt={item.name}
                className="h-16 w-16 rounded-lg"
            />
            <div className="ml-4 flex flex-1 flex-col items-start">
                <div className="max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-p font-bold uppercase sm:max-w-[120px]">
                    {item.name}
                </div>
                <div className="text-button opacity-50">${item.price}</div>
            </div>
            {!isCounterNeeded && (
                <div className="text-p font-bold opacity-50">
                    x{item.quantity}
                </div>
            )}
            {isCounterNeeded && (
                <Counter
                    key={'counter-from-cart'}
                    value={item.quantity}
                    id={item.id}
                    small
                />
            )}
        </li>
    );
}

export default CartItem;
