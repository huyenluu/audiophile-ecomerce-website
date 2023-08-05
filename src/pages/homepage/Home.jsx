import CategoryCardList from "../../ui/CategoryCardList";
import Overlay from "../../ui/Overlay";
import NavBar from "../../ui/NavBar";
import { ButtonDefault, ButtonDefaultOutline } from "../../ui/Buttons";
import Footer from "../../ui/Footer";
import BestGearSection from "../../ui/BestGearSection"

//to-do: remove hard-code data from this page and replace with a data object
export default function Home() {
    return (
        <div className="relative">
            <Overlay />
            <div
                className='bg-[#191919] bg-[url(/assets/home/mobile/image-header.jpg)] bg-contain 50 bg-[center_100%] bg-no-repeat min-h-[31.88rem]
                sm:bg-[url(/assets/home/tablet/image-header.jpg)] sm:min-h-[45.6rem]
                lg:bg-[url(/assets/home/desktop/image-hero.jpg)] 
                w-full text-white flex flex-col relative'
            >
                <NavBar />
                <section className="container w-full text-center flex flex-col items-center flex-grow justify-center
                     lg:items-start"
                >
                    <h6 className="uppercase text-overline opacity-50 mb-4">new product</h6>
                    <h1 className="text-heading-3 mb-6 uppercase  max-w-[20.5rem] 
                    md:text-heading-1 md:max-w-[25rem]
                    lg:text-left">
                        XX99 Mark II Headphones
                    </h1>
                    <p className="text-p mb-[1.75rem] max-w-[20.5rem] md:max-w-[22rem] opacity-75 md:mb-10 lg:text-left">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <ButtonDefault content="See product" className='bg-orange hover:bg-orange-lighter' />
                </section>
            </div>
            <div className="container">
                <CategoryCardList />
                <section className="[&_.card]:rounded-lg [&_.card]:bg-cover [&_.card]:px-6 [&_.card:not(:last-child)]:mb-6
                                [&_.card]:flex [&_.card]:flex-col [&_.card]:justify-center
                                sm:[&_.card]:px-12 lg:[&_.card]:px-24 md:[&_.card:not(:last-child)]:mb-12 
                                lg:[&_.card:first-of-type]:flex-row mb-32">
                    <div className="card bg-[url(/assets/home/desktop/pattern-circles.svg)] bg-[50%_-120px] bg-no-repeat bg-orange
                                    min-h-[37.5rem] items-center
                                    sm:bg-[50%_-200px] lg:h-[35rem] lg:bg-[-225px] overflow-hidden"
                    >
                        <div className="bg-[url(/assets/home/mobile/image-speaker-zx9.png)] w-[10.7rem] h-[12.9rem] bg-contain bg-no-repeat mb-14
                                        sm:bg-[url(/assets/home/tablet/image-speaker-zx9.png)] sm:w-[12.3rem] sm:h-[14.8rem]
                                        lg:bg-[url(/assets/home/desktop/image-speaker-zx9.png)] lg:w-[25.6rem] lg:h-[30.8rem] lg:mb-0 lg:mr-36 lg:mt-[14rem]">

                        </div>
                        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                            <h2 className="text-heading-3 text-white mb-6 lg:text-heading-1">ZX9 SPEAKER</h2>
                            <p className="opacity-75 text-p text-white mb-6 max-w-[20.5rem] md:max-w-[22rem]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <ButtonDefault content='see product' className='bg-black hover:bg-gray-700' />
                        </div>
                        
                    </div>
                    <div className="card bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] 
                                min-h-[19rem] 
                                sm:h-[20rem] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]
                                lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]">
                        <h2 className="text-heading-4 text-black mb-6">ZX9 SPEAKER</h2>
                        <ButtonDefaultOutline content='see product'/>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6">
                        <div className="card bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] shrink-0 h-[12.5rem] bg-center 
                                        sm:w-1/2 sm:h-[20rem] sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)]
                                        lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)]"></div>
                        <div className="card bg-grey-white h-[12.5rem]
                                        sm:w-1/2 sm:h-[20rem]">
                            <h2 className="text-heading-4 text-black mb-6 ">YX1 EARPHONES</h2>
                            <ButtonDefaultOutline content='see product' />
                        </div>
                    </div>
                </section>
                <BestGearSection/>
            </div>
            <Footer/>
        </div>
    )
}
