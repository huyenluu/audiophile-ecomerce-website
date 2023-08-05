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
        <div className="bg-grey-white flex flex-row gap-5 h-12 shrink-0 items-center px-4">
            <button className="text-center text-sm font-bold uppercase w-4 shrink-0 cursor-pointer" onClick={handleClickMinus}>
            -
            </button>
            <div className="text-center text-sm font-bold uppercase mr-px w-4 shrink-0">
                {counter}
            </div>
            <button className="text-center text-sm font-bold uppercase w-4 shrink-0 cursor-pointer" onClick={handleClickPlus}>
            +
            </button>
        </div>
    )
}

export default Counter
