import React from 'react';
import { ButtonArrow } from './Buttons';

type CattegoryMenuItems = {
    name: string;
    path: string;
    image: string;
};

type CategoryCardListProps = {
    classname?: string;
    handleClick?: () => void;
};

export const CATEGORY_MENU_ITEMS: Array<CattegoryMenuItems> = [
    {
        name: 'headphones',
        path: '/category/headphones',
        image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
        name: 'speakers',
        path: '/category/speakers',
        image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
        name: 'earphones',
        path: '/category/earphones',
        image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
];

const CategoryCardList: React.FC<CategoryCardListProps> = ({ classname, handleClick }) => {
    return (
        <div
            className={`${classname} z-[100] mb-16 flex w-full flex-col rounded-bl-lg rounded-br-lg bg-white sm:flex-row 
                sm:gap-3 md:gap-6 lg:my-32`}
        >
            {CATEGORY_MENU_ITEMS.map((item) => {
                return (
                    <div
                        key={item.name}
                        className="relative mt-20 flex flex-col items-center
                                    sm:w-1/3 lg:mt-[unset]"
                    >
                        <div className="flex h-40 w-full flex-col items-center justify-end gap-4 rounded-lg bg-grey-white py-5">
                            <div className="text-center text-sm font-bold uppercase tracking-[1.07] text-black">
                                {item.name}
                            </div>
                            <div onClick={handleClick}>
                                <ButtonArrow
                                    content="Shop"
                                    link={item.path}
                                    moveToTop
                                />
                            </div>
                        </div>
                        <img
                            src={item.image}
                            className="absolute -top-8 left-1/2 h-auto min-h-0 w-32 min-w-0 shrink-0 -translate-x-1/2
                            md:w-[7.68rem]"
                            alt="menu item"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryCardList;
