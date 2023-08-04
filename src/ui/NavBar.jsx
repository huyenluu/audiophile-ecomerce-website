import { useState } from "react"
import { Link } from 'react-router-dom'
import CategoryCardList from './CategoryCardList'
import { FiShoppingCart } from 'react-icons/fi'
import NavigationLink from "./NavigationLink";

//to-do: added animation on menu card dropdown
//to-do: added page transition animation

function NavBar({home}) {
    const [isDropdownMenuOpen, setDropDownMenuOpen] = useState(false);
    const handleClickMenuIcon = () => {
        setDropDownMenuOpen(prevState => !prevState)
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
        
    }
    return (
        <nav className={`${home?"":"bg-black"} z-[200]`}>
                <div className={`flex flex-row w-full items-center justify-between 
                            container px-6 py-8
                            ${!isDropdownMenuOpen && "border-b border-b-gray-700"}`}
                >
                    <div className='flex items-center sm:gap-10 flex-1 lg:flex-none'>
                        <img
                            src='/assets/shared/tablet/icon-hamburger.svg'
                            className='w-[16px] h-[15px] cursor-pointer lg:hidden'
                            onClick={handleClickMenuIcon}
                            alt='menu icon'
                        />
                        <Link to='/' className="flex-1">
                            <img
                                src="/assets/shared/desktop/logo.svg"
                                className="min-h-0 min-w-0 mt-1 m-auto sm:m-[unset]"
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className='justify-center gap-8 hidden lg:flex flex-1 -ml-[143px]'> {/* 143px is audiophile logo width */}
                        <NavigationLink/>
                    </div>
                    <FiShoppingCart size={24} color='white' className='hover:stroke-orange'/>
                </div>
                {isDropdownMenuOpen && <CategoryCardList classname='absolute top-[6rem] px-6 z-[200] pb-20'/>}
            </nav>
    )
}

export default NavBar
