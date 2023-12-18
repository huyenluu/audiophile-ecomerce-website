import React from 'react';
import { useCallback, useEffect, useState } from 'react';

// to-do: added loading image animation and blured image when load https://blog.webdevsimplified.com/2023-05/lazy-load-images/

type ImageProps = {
    linkObj: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    className: string;
    alt: string;
}
type State = {
    imgSrc: string;
}

function Image({ linkObj, className, alt }: ImageProps) {
    const { mobile, tablet, desktop } = linkObj;
    const mobileSrc = mobile.substring(1);
    const tabletSrc = tablet.substring(1);
    const desktopSrc = desktop.substring(1);

    const [state, setState] = useState<State>({ imgSrc: mobileSrc });

    const setNewImgScrBasedOnWindowWidth = useCallback(() => {
        const screenWidth = window.screen.width;
        let newState:State;
        if (screenWidth < 640) {
            newState = { imgSrc: mobileSrc };
        } else if (screenWidth < 1024) {
            newState = { imgSrc: tabletSrc };
        } else {
            newState = { imgSrc: desktopSrc };
        }
        setState(newState);
    }, [mobileSrc, tabletSrc, desktopSrc]);

    useEffect(() => {
        setNewImgScrBasedOnWindowWidth();
    }, [setState, setNewImgScrBasedOnWindowWidth]);

    useEffect(() => {
        window.addEventListener('resize', setNewImgScrBasedOnWindowWidth);
        return () => {
            window.removeEventListener(
                'resize',
                setNewImgScrBasedOnWindowWidth
            );
        };
    }, [desktop, mobile, tablet, setNewImgScrBasedOnWindowWidth]);
    return (
        <div>
            <img
                src={state.imgSrc}
                alt={alt}
                loading="lazy"
                className={`${className}`}
            />
        </div>
    );
}

export default Image;
