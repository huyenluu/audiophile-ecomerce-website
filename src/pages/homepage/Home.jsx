import CategoryCardList from "../../ui/CategoryCardList";
import Overlay from "../../ui/Overlay";
import NavBar from "../../ui/NavBar";
import { ButtonDefault, ButtonDefaultOutline } from "../../ui/Buttons";
import Footer from "../../ui/Footer";
import BestGearSection from "../../ui/BestGearSection"
import data from "../../services/homePageProducts.json";
import { generateProductUrlbasedOnSlug } from "../../utilities/utilities"
import Image from "../../ui/Image"

export default function Home() {
    const [heroSectionProduct] = data.filter((product) => product.position === 'hero')
    const [firstCardProduct] = data.filter((product) => product.position === 'card1')
    const [secondCardProduct] = data.filter((product) => product.position === 'card2')
    const [thirdCardProduct] = data.filter((product) => product.position === 'card3')

    return (
        <div className="relative">
            <Overlay />
            <div className='bg-[#191919] bg-[url(/assets/home/mobile/image-header.jpg)] bg-contain 50 bg-[center_100%] bg-no-repeat min-h-[31.88rem]
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
                        {heroSectionProduct.name}
                    </h1>
                    <p className="text-p mb-[1.75rem] max-w-[20.5rem] md:max-w-[22rem] opacity-75 md:mb-10 lg:text-left">
                        {heroSectionProduct.description}
                    </p>
                    <ButtonDefault 
                        content="See product" 
                        className='bg-orange hover:bg-orange-lighter'
                        link={generateProductUrlbasedOnSlug(heroSectionProduct.slug)}
                    />
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
                        <Image
                            linkObj={firstCardProduct.image}
                            className="w-[10.7rem] h-[12.9rem] mb-14 sm:w-[12.3rem] sm:h-[14.8rem] lg:w-[25.6rem] lg:h-[30.8rem] lg:mb-0 lg:mr-36 lg:mt-[8rem]"
                            alt={firstCardProduct.name}
                        />
                        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                            <h2 className="text-heading-3 text-white mb-6 lg:text-heading-1 uppercase">{firstCardProduct.name}</h2>
                            <p className="opacity-75 text-p text-white mb-6 max-w-[20.5rem] md:max-w-[22rem]">{firstCardProduct.description}</p>
                            <ButtonDefault 
                                content='see product' 
                                className='bg-black hover:bg-gray-700'
                                link={generateProductUrlbasedOnSlug(firstCardProduct.slug)}
                                moveToTop
                            />
                        </div>
                        
                    </div>
                    <div className="card bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] 
                                min-h-[19rem] 
                                sm:h-[20rem] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]
                                lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]">
                        <h2 className="text-heading-4 text-black mb-6 uppercase">{secondCardProduct.name}</h2>
                        <ButtonDefaultOutline 
                            content='see product'
                            link={generateProductUrlbasedOnSlug(secondCardProduct.slug)}
                            moveToTop
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6">
                        <div className="card bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] shrink-0 h-[12.5rem] bg-center 
                                        sm:w-1/2 sm:h-[20rem] sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)]
                                        lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)]"></div>

                        <div className="card bg-grey-white h-[12.5rem]
                                        sm:w-1/2 sm:h-[20rem]">
                            <h2 className="text-heading-4 text-black mb-6 uppercase">{thirdCardProduct.name}</h2>
                            <ButtonDefaultOutline 
                                content='see product'
                                link={generateProductUrlbasedOnSlug(thirdCardProduct.slug)}
                                moveToTop
                            />
                        </div>
                    </div>
                </section>
                <BestGearSection/>
            </div>
            <Footer/>
        </div>
    )
}
