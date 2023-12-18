import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import CategoryCardList from './CategoryCardList';
import NavigationLink from './NavigationLink';
import Cart from '../components/cart/Cart';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectTotalCartQuantity } from '../redux/cartSlice';
import { toggleOverlay, removeOverlay } from '../redux/uiSlice';

type NavBarProps = {
    home?:boolean
}
function NavBar ({ home }: NavBarProps){
    const [isDropdownMenuOpen, setDropDownMenuOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCardOpen] = useState<boolean>(false);
    const location = useLocation();
    const isCheckoutPage:boolean = location.pathname.includes('checkout');
    const itemsNumber:number = useAppSelector(selectTotalCartQuantity);
    const dispatch = useAppDispatch();

    const toggleCardOpen = () => {
        setIsCardOpen((prevState) => !prevState);
        if (isDropdownMenuOpen === true) {
            setDropDownMenuOpen(false);
            return;
        }
        dispatch(toggleOverlay());
    };
    const handleClickMenuIcon = () => {
        setDropDownMenuOpen((prevState) => !prevState);
        if (isCartOpen === true) {
            setIsCardOpen(false);
            return;
        }
        dispatch(toggleOverlay());
    };
    const handleShopClick = () => {
        setDropDownMenuOpen(false);
        dispatch(removeOverlay());
    };

    useEffect(() => {
        const closeCart = () => {
            dispatch(removeOverlay());
            setIsCardOpen(false);
            setDropDownMenuOpen(false);
        };
        const overlayEl = document.getElementById('overlay');
        if(overlayEl) {
            overlayEl.addEventListener('click', closeCart);
            return () => {
                overlayEl.removeEventListener('click', closeCart);
            };
        }
       
    }, [dispatch]);

    return (
        <nav className={`${home ? '' : 'bg-black'} z-[200]`}>
            <div
                className={`container flex h-24 w-full flex-row 
                            items-center justify-between px-6
                            ${
                                !isDropdownMenuOpen &&
                                'border-b border-b-gray-700'
                            }`}
            >
                <div className="flex flex-1 items-center sm:gap-10 lg:flex-none">
                    <img
                        src="/assets/shared/tablet/icon-hamburger.svg"
                        className="h-[15px] w-[16px] cursor-pointer lg:hidden"
                        onClick={handleClickMenuIcon}
                        alt="menu icon"
                    />
                    <Link to="/" className="flex-1 cursor-pointer">
                        <img
                            src="/assets/shared/desktop/logo.svg"
                            className="m-auto h-[1.56rem] w-[8.9rem] sm:m-[unset]"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="-ml-[143px] hidden flex-1 justify-center gap-8 lg:flex">
                    {' '}
                    {/* 143px is audiophile logo width */}
                    <NavigationLink />
                </div>
                {!isCheckoutPage && (
                    <div className="relative">
                        <FiShoppingCart
                            size={24}
                            color="white"
                            className="cursor-pointer hover:stroke-orange"
                            onClick={toggleCardOpen}
                        />
                        {itemsNumber > 0 && (
                            <div className="absolute right-[-11px] top-[-14px] flex h-6 w-6 items-center justify-center rounded-full bg-orange">
                                <div className="text-sm font-bold text-white">
                                    {itemsNumber}
                                </div>
                            </div>
                        )}
                        {isCartOpen && <Cart />}
                    </div>
                )}
            </div>
            {isDropdownMenuOpen && (
                <CategoryCardList
                    classname="absolute top-[6rem] px-6 z-[200] pb-20"
                    handleClick={handleShopClick}
                />
            )}
        </nav>
    );
}

export default NavBar;
