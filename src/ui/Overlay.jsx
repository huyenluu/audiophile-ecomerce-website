

function Overlay({children}) {
    return (
        <div id="overlay" className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-[100] hidden">
            {children}
        </div>
    )
}

export default Overlay
