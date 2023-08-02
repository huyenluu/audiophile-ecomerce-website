import { Link } from 'react-router-dom'
import { ButtonArrow } from './buttons'

const MENU_ITEMS = ['home', 'headphones','speakers','earphones']
const  CATEGORY_MENU_ITEMS = [
    { 
        name: 'headphones',
        path: 'category/headphones',
        image: 'public/assets/shared/desktop/image-category-thumbnail-headphones.png'
    
    },
    {
        name: 'speakers',
        path: 'category/speakers',
        image: 'public/assets/shared/desktop/image-category-thumbnail-speakers.png'
    },
    {
        name: 'earphones',
        path: 'category/earphones',
        image: 'public/assets/shared/desktop/image-category-thumbnail-earphones.png'
    }
]

function MenuDropdown() {
    return(
        <nav className='rounded-br-lg rounded-bl-lg bg-white flex flex-col w-full z-[100] px-6 pb-16 md:flex-row md:gap-3'>
            {
                CATEGORY_MENU_ITEMS.map((item) => {
                    return(
                    <div className="relative flex flex-col items-center
                                    md:w-1/3"
                    >
                        <div className="w-full h-40 bg-grey-white flex flex-col justify-end gap-4 items-center py-5 rounded-lg mt-[5.25rem]">
                            <div className="text-center text-sm font-bold tracking-[1.07] uppercase">
                                {item.name}
                            </div>
                            <Link to={item.path}>
                                <ButtonArrow content='Shop'/>
                            </Link>
                        </div>
                        <img
                            src={item.image}
                            className="min-h-0 min-w-0 w-32 h-auto shrink-0 absolute top-12 left-1/2 -translate-x-1/2"
                            alt='menu item'
                        />
                    </div>
                )})
            }
        </nav>
    )
}
function Header({isDropdownMenuOpen,handleClickMenuIcon}) {

    return (
        <header id='header' className='bg-black'>
            <nav className={`flex flex-row w-full items-center justify-between 
                            container px-6 py-8
                            ${!isDropdownMenuOpen && "border-b border-b-grey-light"}`}
            >
                <img
                    src='public/assets/shared/tablet/icon-hamburger.svg'
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
                
                <div className='w-1/3 justify-center gap-8 hidden lg:inline-flex'>
                    {MENU_ITEMS.map(item =>
                    (
                        <Link className="text-xs font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
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
            </nav>
            {isDropdownMenuOpen && <MenuDropdown/>}
        </header>
    )
}

export default Header
