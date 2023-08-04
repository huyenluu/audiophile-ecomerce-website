import { Link } from 'react-router-dom'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <div className="overflow-hidden flex flex-col w-full text-white bg-black">
            <div className="container flex flex-col gap-12 shrink-0 items-center pb-10
                            sm:items-start">
                <div className="bg-orange w-24 h-1 shrink-0" />
                <Link to='/'>
                    <img
                        src="/assets/shared/desktop/logo.svg"
                        className="min-h-0 min-w-0 mt-1"
                        alt='logo'
                    />
                </Link>
                <div className="flex flex-col items-center gap-y-4
                                sm:flex-row gap-8">
                    <Link to="/" className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
                        Home
                    </Link>
                    <Link to="/category/headphones" className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
                        HEADPHONES
                    </Link>
                    <Link to="/category/speakers" className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
                        SPEAKERS
                    </Link>
                    <Link to="/category/earphones" className="text-sm font-bold tracking-[2] leading-[25px] uppercase text-white hover:text-orange color-transition-effect">
                        EARPHONES
                    </Link>
                </div>
                <div className="text-center text-p self-stretch opacity-50
                                sm:text-left">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a
                    small team of music lovers and sound specialists who are devoted to
                    helping you get the most out of personal audio. Come and visit our demo
                    facility - we’re open 7 days a week.
                </div>
                <div className='flex flex-col gap-y-12 items-center 
                                sm:flex-row sm:justify-between sm:w-full'>
                    <div className="whitespace-nowrap text-sm opacity-50">
                        Copyright 2021. All Rights Reserved
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <AiFillFacebook size={24} color='white' className='hover:fill-orange'/>
                        <AiOutlineTwitter size={24} color='white' className='hover:fill-orange'/>
                        <AiOutlineInstagram size={24} color='white' className='hover:fill-orange'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
