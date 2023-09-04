import React, { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectIsOverlayHidden } from "../redux/uiSlice";

const Overlay: FC = () => {
    const isOverlayHidden = useAppSelector(selectIsOverlayHidden);
    return (
        <div
            id="overlay"
            className={`absolute left-0 top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.5)]
                        ${isOverlayHidden? 'hidden' : ''}`}
        ></div>
    );
}

export default Overlay;
