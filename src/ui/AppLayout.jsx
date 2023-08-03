import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function AppLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main id='main' className="relative flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
