import { useEffect } from 'react'
import { ButtonArrow } from './Buttons'

export const  CATEGORY_MENU_ITEMS = [
    { 
        name: 'headphones',
        path: '/category/headphones',
        image: '/assets/shared/desktop/image-category-thumbnail-headphones.png'
    
    },
    {
        name: 'speakers',
        path: '/category/speakers',
        image: '/assets/shared/desktop/image-category-thumbnail-speakers.png'
    },
    {
        name: 'earphones',
        path: '/category/earphones',
        image: '/assets/shared/desktop/image-category-thumbnail-earphones.png'
    }
]

//to-do: add scroll animation
function CategoryCardList({classname, handleClick}) {

    return(
        <div className={`${classname} rounded-br-lg rounded-bl-lg bg-white flex flex-col w-full z-[100] mb-16 sm:flex-row 
                sm:gap-3 md:gap-6 lg:my-32`}>
            {
                CATEGORY_MENU_ITEMS.map((item) => {
                    return(
                    <div key={item.name} className="relative flex flex-col items-center mt-20
                                    sm:w-1/3 lg:mt-[unset]"
                    >
                        <div className="w-full h-40 bg-grey-white flex flex-col justify-end gap-4 items-center py-5 rounded-lg">
                            <div className="text-center text-sm font-bold tracking-[1.07] uppercase text-black">
                                {item.name}
                            </div>
                            <div onClick={handleClick}>
                                <ButtonArrow
                                    content='Shop'
                                    link={item.path}
                                    moveToTop
                                />
                            </div>
                        </div>
                        <img
                            src={item.image}
                            className="min-h-0 min-w-0 w-32 h-auto shrink-0 absolute -top-8 left-1/2 -translate-x-1/2
                            md:w-[7.68rem]"
                            alt='menu item'
                        />
                    </div>
                )})
            }
        </div>
    )
}

export default CategoryCardList