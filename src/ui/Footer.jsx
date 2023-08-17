import { Link } from 'react-router-dom';
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram,
} from 'react-icons/ai';
import NavigationLink from './NavigationLink';

function Footer() {
    return (
        <div className="flex w-full flex-col overflow-hidden bg-black text-white">
            <div
                className="container flex shrink-0 flex-col items-center gap-12 pb-10
                            sm:items-start"
            >
                <div className="h-1 w-24 shrink-0 bg-orange" />
                <Link to="/">
                    <img
                        src="/assets/shared/desktop/logo.svg"
                        className="mt-1 min-h-0 min-w-0"
                        alt="logo"
                    />
                </Link>
                <div className="flex flex-col items-center gap-8 gap-y-4 sm:flex-row">
                    <NavigationLink />
                </div>
                <div
                    className="self-stretch text-center text-p opacity-50
                                sm:text-left"
                >
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </div>
                <div
                    className="flex flex-col items-center gap-y-12 
                                sm:w-full sm:flex-row sm:justify-between"
                >
                    <div className="whitespace-nowrap text-sm opacity-50">
                        Copyright 2021. All Rights Reserved
                    </div>
                    <div className="flex cursor-pointer gap-2">
                        <AiFillFacebook
                            size={24}
                            color="white"
                            className="hover:fill-orange"
                        />
                        <AiOutlineTwitter
                            size={24}
                            color="white"
                            className="hover:fill-orange"
                        />
                        <AiOutlineInstagram
                            size={24}
                            color="white"
                            className="hover:fill-orange"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
