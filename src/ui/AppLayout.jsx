import { Outlet, useLocation, useParams, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Overlay from "./Overlay"
import Loader from "./Loader"
import BestGearSection from "./BestGearSection"

function AppLayout() {
    const { categoryName } = useParams()
    const location = useLocation()
    const isCategoryPage = location.pathname === `/category/${categoryName}`
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="flex flex-col">
            {isLoading && <Loader />}
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
