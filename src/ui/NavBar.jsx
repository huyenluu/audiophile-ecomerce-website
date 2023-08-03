import { useState } from "react"
import { Link } from 'react-router-dom'
import CategoryCardList from './CategoryCardList'

const MENU_ITEMS = ['home', 'headphones','speakers','earphones']
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
        <nav className={home?"":"bg-black"}>
                <div className={`flex flex-row w-full items-center justify-between 
                            container px-6 py-8
                            ${!isDropdownMenuOpen && "border-b border-b-gray-700"}`}
                >
                    <div className='flex items-center gap-10'>
                        <img
                            src='/assets/shared/tablet/icon-hamburger.svg'
                            className='w-[16px] h-[15px] cursor-pointer lg:hidden'
                            onClick={handleClickMenuIcon}
                            alt='menu icon'
                        />
                        <Link to='/'>
                            <img
                                src="/assets/shared/desktop/logo.svg"
                                className="min-h-0 min-w-0 mt-1"
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className='w-1/3 justify-center gap-8 hidden lg:inline-flex'>
                        {MENU_ITEMS.map(item =>
                        (
                            <Link key={item} className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
                                {item}
                            </Link>
                        )
                        )}
                    </div>
                    <img
                        src="/assets/shared/desktop/icon-cart.svg"
                        className="min-h-0 min-w-0 w-6"
                        alt='cart-icon'
                    />
                </div>
                {isDropdownMenuOpen && <CategoryCardList classname='absolute top-[6rem] px-6 z-[200]'/>}
            </nav>
    )
}

export default NavBar
