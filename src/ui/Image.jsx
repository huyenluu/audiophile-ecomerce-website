import { useCallback, useEffect, useState } from "react";


// to-do: added loading image animation and blured image when load https://blog.webdevsimplified.com/2023-05/lazy-load-images/
// props.width={mobile:value, tablet: value, desktop:value} value px
function Image({linkObj, width, className, alt}) {
    const {mobile, tablet, desktop} = linkObj
    const mobileSrc = mobile.substring(1)
    const tabletSrc = tablet.substring(1)
    const desktopSrc = desktop.substring(1)

    const [state,setState] = useState({imgSrc:mobileSrc, width:width.mobile})

    const setNewImgScrBasedOnWindowWidth = useCallback(() => {
        const screenWidth = window.screen.width
        let newState = {};
        if(screenWidth < 640) {
            newState = {imgSrc:mobileSrc, width: width.mobile}
        }else if(screenWidth < 1024){
            newState = {imgSrc:tabletSrc, width: width.tablet}
        } else {
            newState = {imgSrc: desktopSrc, width: width.desktop}
        }
        setState(newState)
    },[mobileSrc, tabletSrc, desktopSrc, width.mobile, width.desktop, width.tablet])


    useEffect(()=>{
        setNewImgScrBasedOnWindowWidth()
    },[setState,setNewImgScrBasedOnWindowWidth])

    useEffect(()=>{
        window.addEventListener("resize", setNewImgScrBasedOnWindowWidth);
        return () => {
            window.removeEventListener('resize', setNewImgScrBasedOnWindowWidth);
          };
    },[desktop, mobile, tablet, setNewImgScrBasedOnWindowWidth])
    return (
        <div>
            <img 
                src={state.imgSrc} 
                alt={alt} 
                loading="lazy"
                className={`${className}`}
                width={state.width}
            />
        </div>
    )
}

export default Image
