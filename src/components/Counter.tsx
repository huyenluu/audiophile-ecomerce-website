import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, changeItemQuantity } from '../redux/cartSlice';

interface CounterProps {
    value?: number;
    onValueChange?: (value: number) => void;
    id?: string;
    small?: boolean;
}

const Counter: React.FC<CounterProps> = ({ value, onValueChange, id, small }) => {
    const [counter, setCounter] = useState<number>(1);
    const dispatch = useDispatch();

    const handleClickPlus = () => {
        if (!value && !id) {
            onValueChange && onValueChange(counter + 1);
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            dispatch(changeItemQuantity({ id, value: counter + 1 }));
        }
    };

    const handleClickMinus = () => {
        if (!value && !id) {
            onValueChange && onValueChange(counter - 1);
            setCounter((prevCounter) => prevCounter - 1);
        } else if (value === 1) {
            dispatch(deleteItem(id));
        } else {
            dispatch(changeItemQuantity({ id, value: value - 1 }));
        }
    };

    return (
        <div
            className={`${
                small ? 'h-8 w-24' : 'h-12 w-[7.5rem]'
            } flex flex-row items-center justify-between gap-5 bg-grey-white px-4`}
        >
            <button
                className="shrink-0 cursor-pointer text-center text-sm font-bold uppercase"
                onClick={handleClickMinus}
            >
                -
            </button>
            <div className="mr-px shrink-0 text-center text-sm font-bold uppercase">
                {value ? value : counter}
            </div>
            <button
                className="shrink-0 cursor-pointer text-center text-sm font-bold uppercase"
                onClick={handleClickPlus}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
