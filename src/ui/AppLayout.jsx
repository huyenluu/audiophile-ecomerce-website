import { Outlet, useLocation, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Overlay from "./Overlay"
import BestGearSection from "./BestGearSection"

function AppLayout() {
    const { categoryName } = useParams()
    const location = useLocation()
    const isCategoryPage = location === `/category/${categoryName}`
    return (
        <div className="flex flex-col">
            {isCategoryPage && <Header category={categoryName}/>}
            {!isCategoryPage && <Header/>}
            <main id='main' className="relative flex-grow">
                <Overlay />
                <Outlet />
                <BestGearSection className='container'/>
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout
