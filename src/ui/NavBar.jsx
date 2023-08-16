import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import CategoryCardList from './CategoryCardList'
import { FiShoppingCart } from 'react-icons/fi'
import NavigationLink from "./NavigationLink"
import Cart from "../components/cart/Cart"
import { useSelector } from "react-redux"
import { getTotalCartQuantity } from "../redux/cartSlice"


//to-do: added animation on menu card dropdown
//to-do: added page transition animation

function NavBar({home}) {
    const [isDropdownMenuOpen, setDropDownMenuOpen] = useState(false)
    const [isCartOpen, setIsCardOpen] = useState(false)
    const location = useLocation();
    const isCheckoutPage = location.pathname.includes('checkout')
    const itemsNumber = useSelector(getTotalCartQuantity)

    const toggleOverlay = () => {
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
    }
    const removeOverlay = () => {
        const elements = document.getElementById('overlay')
        elements.classList.add("hidden")
    }
    const toggleCardOpen = () => {
        setIsCardOpen(prevState => !prevState)
        if(isDropdownMenuOpen === true) {
            setDropDownMenuOpen(false)
            return
        }
        toggleOverlay()
    }
    const handleClickMenuIcon = () => {
        setDropDownMenuOpen(prevState => !prevState)
        if(isCartOpen === true) {
            setIsCardOpen(false)
            return
        }
        toggleOverlay()
    }
    const  handleShopClick = () => {
        setDropDownMenuOpen(false)
        removeOverlay()
    }
    
    useEffect(() => {
        const closeCart = () => {
            removeOverlay()
            setIsCardOpen(false)
            setDropDownMenuOpen(false)
        }
        const overlayEl = document.getElementById('overlay')
        overlayEl.addEventListener("click", closeCart)
        return overlayEl.addEventListener("click", closeCart)
    },[])

    return (
        <nav className={`${home?"":"bg-black"} z-[200]`}>
                <div className={`flex flex-row w-full items-center justify-between 
                            container px-6 h-24
                            ${!isDropdownMenuOpen && "border-b border-b-gray-700"}`}
                >
                    <div className='flex items-center sm:gap-10 flex-1 lg:flex-none'>
                        <img
                            src='/assets/shared/tablet/icon-hamburger.svg'
                            className='w-[16px] h-[15px] cursor-pointer lg:hidden'
                            onClick={handleClickMenuIcon}
                            alt='menu icon'
                        />
                        <Link to='/' className="flex-1 cursor-pointer">
                            <img
                                src="/assets/shared/desktop/logo.svg"
                                className="w-[8.9rem] h-[1.56rem] m-auto sm:m-[unset]"
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className='justify-center gap-8 hidden lg:flex flex-1 -ml-[143px]'> {/* 143px is audiophile logo width */}
                        <NavigationLink/>
                    </div>
                    { !isCheckoutPage && <div className="relative">
                        <FiShoppingCart 
                            size={24} 
                            color='white' 
                            className='hover:stroke-orange cursor-pointer'
                            onClick={toggleCardOpen}
                        />
                        {itemsNumber > 0 && <div className="bg-orange absolute w-6 h-6 rounded-full top-[-14px] right-[-11px] flex justify-center items-center">
                            <div className="text-sm font-bold text-white">{itemsNumber}</div>
                        </div>}
                        {isCartOpen && <Cart/>}
                    </div>}
                    
                </div>
                {isDropdownMenuOpen && <CategoryCardList classname='absolute top-[6rem] px-6 z-[200] pb-20' handleClick={handleShopClick}/>}
            </nav>
    )
}

export default NavBar
