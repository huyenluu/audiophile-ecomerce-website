import { Link } from "react-router-dom"

// className must have bg-color/hover:bg-color otherwise this button is white
export const ButtonDefault = ({content, className, link, handleClick}) => {
    return(
        <Link to={link} onClick={handleClick}>
            <div className={`${className} py-4 px-8 w-fit cursor-pointer color-transition-effect`}>
                <div className="whitespace-nowrap text-button uppercase text-white">
                    {content}
                </div>
            </div>
        </Link>
    )
}
export const ButtonDefaultOutline = ({content, className, link}) => {
    return(
        <Link to={link}>
            <div className={`${className} py-4 px-8 w-fit cursor-pointer border border-black hover:bg-gray-700 color-transition-effect`}>
                <div className="whitespace-nowrap text-button uppercase ">
                    {content}
                </div>
            </div>
        </Link>
        
    )
}

export const ButtonArrow = ({content}) => {
    return (
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
    )
}