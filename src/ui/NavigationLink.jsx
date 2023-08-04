import {Link} from 'react-router-dom'

const MENU_ITEMS = ['home', 'headphones','speakers','earphones']
function NavigationLink() {
    return MENU_ITEMS.map(item =>
            (
                <Link 
                    to={item === 'home' ? "/" :`/category/${item}`} 
                    key={item}
                    onClick={()=> window.scrollTo(0, 0)}
                    className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect"
                >
                    {item}
                </Link>
            )
            )
}

export default NavigationLink
