import { useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Overlay from "./Overlay";

function AppLayout() {
    const [isDropdownMenuOpen, setDropDownMenuOpen] = useState(false);
    const handleClickMenuIcon = () => {
        setDropDownMenuOpen(prevState => !prevState)
    }
    return (
        <div className="flex flex-col h-screen">
            <Header
                isDropdownMenuOpen={isDropdownMenuOpen}
                handleClickMenuIcon={handleClickMenuIcon}
            />
            <main id='main' className="relative flex-grow">
                { isDropdownMenuOpen && <Overlay> <Outlet /> </Overlay>}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
