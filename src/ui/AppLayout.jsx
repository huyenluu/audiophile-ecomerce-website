import { Outlet, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import BestGearSection from "./BestGearSection"

function AppLayout() {
    const { categoryName } = useParams()
    return (
        <div className="flex flex-col">
            <Header category={categoryName}/>
            <main id='main' className="relative flex-grow">
                <Outlet />
                <BestGearSection className='container'/>
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout
