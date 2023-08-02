

function Overlay({children}) {
    return (
        <div className="fix top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[1000]">
            {children}
        </div>
    )
}

export default Overlay
