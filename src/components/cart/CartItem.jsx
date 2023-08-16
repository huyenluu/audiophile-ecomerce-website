import Counter from "../Counter"


function CartItem({item, index, isCounterNeeded}) {
    const imageUrl = item.image.substring(1)
    return (
        <li key={item.name+index} className="flex justify-between items-center mb-8 last:mb-2">
            <img
                src={imageUrl}
                alt={item.name}
                className='w-16 h-16 rounded-lg'
            />
            <div className='flex flex-col items-start flex-1 ml-4'>
                <div className='text-p font-bold uppercase text-ellipsis whitespace-nowrap max-w-[60px] overflow-hidden sm:max-w-[120px]'>{item.name}</div>
                <div className='text-button opacity-50'>${item.price}</div>
            </div>
            {!isCounterNeeded && <div className='text-p font-bold opacity-50'>x{item.quantity}</div>}
            {isCounterNeeded && <Counter key={'counter-from-cart'} value={item.quantity} id={item.id} small/>}
        </li>
    )
}

export default CartItem
