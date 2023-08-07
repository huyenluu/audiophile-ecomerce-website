import { useState } from "react"
import { Link } from 'react-router-dom'
import CategoryCardList from './CategoryCardList'
import { FiShoppingCart } from 'react-icons/fi'
import NavigationLink from "./NavigationLink";
import Cart from "../components/Cart";
import logo from "../../public/assets/shared/desktop/logo.svg"

//to-do: implemented card modal
//to-do: close menu card when user clicked on one of the items
//to-do: added animation on menu card dropdown
//to-do: added page transition animation

function NavBar({home}) {
    const [isDropdownMenuOpen, setDropDownMenuOpen] = useState(false)
    const [isCartOpen, setIsCardOpen] = useState(false)

    const toggleCardOpen = () => {
        setIsCardOpen(prevState => !prevState)
        if(isDropdownMenuOpen === true) {
            setDropDownMenuOpen(false)
            return
        }
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
    }
    const handleClickMenuIcon = () => {
        setDropDownMenuOpen(prevState => !prevState)
        if(isCartOpen === true) {
            setIsCardOpen(false)
            return
        }
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
        
    }
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
                                src={logo}
                                className="w-[8.9rem] h-[1.56rem] m-auto sm:m-[unset]"
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className='justify-center gap-8 hidden lg:flex flex-1 -ml-[143px]'> {/* 143px is audiophile logo width */}
                        <NavigationLink/>
                    </div>
                    <div className="relative">
                        <FiShoppingCart 
                            size={24} 
                            color='white' 
                            className='hover:stroke-orange cursor-pointer'
                            onClick={toggleCardOpen}
                        />
                        {isCartOpen && <Cart cartItems={[{name: "item 1"},{name: "item 2"}, {name: "item 2"}]}/>}
                    </div>
                    
                </div>
                {isDropdownMenuOpen && <CategoryCardList classname='absolute top-[6rem] px-6 z-[200] pb-20'/>}
            </nav>
    )
}

export default NavBar
