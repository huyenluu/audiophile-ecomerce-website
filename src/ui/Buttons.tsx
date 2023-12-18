import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    content?: string;
    className?: string;
    link?: string;
    onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    moveToTop?: boolean;
    children?: React.ReactNode;
    [x: string]: any;
};

const handleMoveToTop = (moveToTop:boolean|undefined) => {
    if (moveToTop) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
};

const handleOnClick = (moveToTop:boolean|undefined, onClick?:()=>void):void => {
    handleMoveToTop(moveToTop);
    if (onClick) onClick();
};

export const ButtonDefault = ({
    content,
    className,
    link,
    onClick,
    moveToTop,
    children,
    ...props
}: ButtonProps) => {
    return link ? (
        <Link
            to={link}
            onClick={() => handleOnClick(moveToTop, onClick)}
            {...props}
        >
            <div
                className={`${className} color-transition-effect w-fit cursor-pointer px-8 py-4`}
            >
                <div className="whitespace-nowrap text-center text-button uppercase text-white">
                    {content ? content : children}
                </div>
            </div>
        </Link>
    ) : (
        <div
            className={`${className} color-transition-effect cursor-pointer px-8 py-4`}
            onClick={() => handleOnClick(moveToTop, onClick)}
            {...props}
        >
            <div className="text-center text-button uppercase text-white">
                {content ? content : children}
            </div>
        </div>
    );
};

export const ButtonDefaultOutline = ({
    content,
    className,
    moveToTop,
    link,
    onClick,
    children,
    ...props
}: ButtonProps) => {
    return link ? (
        <Link
            to={link}
            onClick={() => handleOnClick(moveToTop, onClick)}
            {...props}
        >
            <div
                className={`${className} color-transition-effect w-fit cursor-pointer border border-black px-8 py-4 hover:bg-gray-700`}
            >
                <div className="whitespace-nowrap text-center text-button uppercase">
                    {content ? content : children}
                </div>
            </div>
        </Link>
    ) : (
        <div
            className={`${className} color-transition-effect w-fit cursor-pointer border border-black px-8 py-4 hover:bg-gray-700`}
            onClick={() => handleOnClick(moveToTop, onClick)}
            {...props}
        >
            <div className="text-center text-button uppercase">
                {content ? content : children}
            </div>
        </div>
    );
};

export const ButtonArrow = ({ content, moveToTop, link, ...props}) => {
    return (
        <Link to={link} onClick={() => handleOnClick(moveToTop)} {...props}>
            <div className="flex w-16 cursor-pointer flex-row items-center gap-3">
                <div className="text-sm font-bold uppercase tracking-[1] text-gray-500 hover:text-orange">
                    {content}
                </div>
                <img
                    src="/assets/shared/desktop/icon-arrow-right.svg"
                    className="h-[10px] w-[5px]"
                    alt="arrow-icon"
                />
            </div>
        </Link>
    );
};
