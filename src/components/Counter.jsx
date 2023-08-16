import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteItem, changeItemQuantity } from "../redux/cartSlice"

function Counter({value, onValueChange, id, small}) {
   const [counter,setCounter] = useState(1)
   const dispatch = useDispatch()
    const handleClickPlus = () => {
        if(!value && !id) {
            onValueChange(counter + 1)
            setCounter(counter =>  counter + 1)
        } else {
            dispatch(changeItemQuantity({id,value: counter+1}))
        }
        dispatch(changeItemQuantity({id,value: value+1}))
    }
    const handleClickMinus = () => {
        if(!value && !id) {
            onValueChange(counter - 1)
            setCounter(counter =>  counter - 1)
        } else if(value === 1) {
            dispatch(deleteItem(id))
        } else {
            dispatch(changeItemQuantity({id,value:value-1}))
        }
    }

    return (
        <div className={`${small?'w-24 h-8':'w-[7.5rem] h-12'} bg-grey-white flex flex-row gap-5 items-center px-4 justify-between`}>
            <button className="text-center text-sm font-bold uppercase shrink-0 cursor-pointer" onClick={handleClickMinus}>
            -
            </button>
            <div className="text-center text-sm font-bold uppercase mr-px shrink-0">
                {value ? value : counter}
            </div>
            <button className="text-center text-sm font-bold uppercase shrink-0 cursor-pointer" onClick={handleClickPlus}>
            +
            </button>
        </div>
    )
}

export default Counter
