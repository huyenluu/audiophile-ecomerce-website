import { useEffect, useState } from "react"

function Counter({getCounter}) {
    const [counter, setCounter] = useState(1)
    const handleClickPlus = () => {
        setCounter(prevState => prevState + 1)
    }
    const handleClickMinus = () => {
        if(counter < 1) {
            return
        }
        setCounter(prevState => prevState - 1)
    }
    useEffect(()=> {
        getCounter(counter)
    },[counter, getCounter])
    return (
        <div className="bg-grey-white flex flex-row gap-5 h-12 items-center px-4 w-24 sm:w-[7.5rem] justify-between">
            <button className="text-center text-sm font-bold uppercase shrink-0 cursor-pointer" onClick={handleClickMinus}>
            -
            </button>
            <div className="text-center text-sm font-bold uppercase mr-px shrink-0">
                {counter}
            </div>
            <button className="text-center text-sm font-bold uppercase shrink-0 cursor-pointer" onClick={handleClickPlus}>
            +
            </button>
        </div>
    )
}

export default Counter
