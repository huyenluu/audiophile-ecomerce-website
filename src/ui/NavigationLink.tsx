import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS:string[] = ['home', 'headphones', 'speakers', 'earphones'];

const NavigationLink: FC = () => {
    const [activeLink, setActiveLink] = useState<string>(MENU_ITEMS[0]);

    const handleMenuItemClick = (item:string) => {
        setActiveLink(item)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return MENU_ITEMS.map((item) => (
        <Link
            to={item === 'home' ? '/' : `/category/${item}`}
            key={item}
            onClick={() =>handleMenuItemClick(item)}
            className={`color-transition-effect text-sm font-bold uppercase leading-[25px] tracking-[2] hover:text-orange
                    ${item === activeLink ? "text-orange" : "text-white"}`}
        >
            {item}
        </Link>
    ));
}

export default NavigationLink;
