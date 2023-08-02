export const ButtonDefault = ({content}) => {
    return(
        <div className="flex flex-col w-full">
            <div className="bg-orange flex flex-col justify-center h-12 shrink-0 items-center hover:bg-orange-lighter">
                <div className="whitespace-nowrap text-xs font-bold tracking-[1] uppercase text-white w-3/5">
                    {content}
                </div>
            </div>
        </div>
    )
}

export const ButtonDefaultMono = ({content}) => {
    return (
        <div className="overflow-hidden flex flex-col w-full">
            <div className="border-solid flex flex-col justify-center h-12 shrink-0 items-center border-black border hover:bg-black">
                <div className="whitespace-nowrap text-xs font-bold tracking-[1] uppercase w-3/5">
                    {content}
                </div>
            </div>
        </div>
    )
}

export const ButtonArrow = ({content}) => {
    return (
        <div className="overflow-hidden flex flex-row gap-3 w-16 items-center cursor-pointer">
            <div className="text-xs font-bold tracking-[1] uppercase text-gray-500 hover:text-orange">
                {content}
            </div>
            <img
                src="public/assets/shared/desktop/icon-arrow-right.svg"
                className="w-[5px] h-[10px]"
                alt="arrow-icon"
            />
        </div>
    )
}