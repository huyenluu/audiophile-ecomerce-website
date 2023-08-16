import { Link } from "react-router-dom"

const handleMoveToTop = (moveToTop) => {
    if(!moveToTop) {
        return
    }else {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
}
// className must have bg-color/hover:bg-color otherwise this button is white
export const ButtonDefault = ({content, className, link, onClick, moveToTop, ...props}) => {
    return(
        link  ? (
            <Link to={link} onClick={()=>{handleMoveToTop(moveToTop)}} {...props} >
                <div className={`${className} py-4 px-8 w-fit cursor-pointer color-transition-effect`}>
                    <div className="whitespace-nowrap text-button uppercase text-white text-center">
                        {content}
                    </div>
                </div>
            </Link>
        ) : (
            <div
                className={`${className} py-4 px-8 w-fit cursor-pointer color-transition-effect`} 
                onClick={onClick}
                {...props}
            >
                <div className="whitespace-nowrap text-button uppercase text-white text-center">
                    {content}
                </div>
            </div>
        )
    )
}
export const ButtonDefaultOutline = ({content, className, moveToTop, link, onClick, ...props}) => {
    return(
        link ? (
            <Link to={link} onClick={()=>{handleMoveToTop(moveToTop)}} {...props}>
                <div className={`${className} py-4 px-8 w-fit cursor-pointer border border-black hover:bg-gray-700 color-transition-effect`}>
                    <div className="whitespace-nowrap text-button uppercase text-center">
                        {content}
                    </div>
                </div>
            </Link>
        ) : (
            <div 
                className={`${className} py-4 px-8 w-fit cursor-pointer border border-black hover:bg-gray-700 color-transition-effect`}
                onClick={onClick}
                {...props}
            >
                <div className="whitespace-nowrap text-button uppercase text-center">
                    {content}
                </div>
            </div>
        )
    )
}

export const ButtonArrow = ({content, moveToTop, link, ...props}) => {
    return (
        <Link to={link} onClick={()=>{handleMoveToTop(moveToTop)}} {...props}>
            <div className="flex flex-row gap-3 w-16 items-center cursor-pointer">
                <div className="text-sm font-bold tracking-[1] uppercase text-gray-500 hover:text-orange">
                    {content}
                </div>
                <img
                    src="/assets/shared/desktop/icon-arrow-right.svg"
                    className="w-[5px] h-[10px]"
                    alt="arrow-icon"
                />
            </div>
        </Link>
    )
}