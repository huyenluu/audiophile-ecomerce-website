import { Link } from 'react-router-dom';

const MENU_ITEMS = ['home', 'headphones', 'speakers', 'earphones'];
function NavigationLink() {
    return MENU_ITEMS.map((item) => (
        <Link
            to={item === 'home' ? '/' : `/category/${item}`}
            key={item}
            onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
            className="color-transition-effect text-sm font-bold uppercase leading-[25px] tracking-[2] text-white hover:text-orange"
        >
            {item}
        </Link>
    ));
}

export default NavigationLink;
