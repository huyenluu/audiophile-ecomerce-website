import { useNavigation } from 'react-router-dom';
import CategoryCardList from '../../ui/CategoryCardList';
import Overlay from '../../ui/Overlay';
import NavBar from '../../ui/NavBar';
import { ButtonDefault, ButtonDefaultOutline } from '../../ui/Buttons';
import Footer from '../../ui/Footer';
import BestGearSection from '../../ui/BestGearSection';
import data from '../../services/homePageProducts.json';
import { generateProductUrlbasedOnSlug } from '../../utilities/utilities';
import Image from '../../ui/Image';
import Loader from '../../ui/Loader';

export default function Home() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const [heroSectionProduct] = data.filter(
        (product) => product.position === 'hero'
    );
    const [firstCardProduct] = data.filter(
        (product) => product.position === 'card1'
    );
    const [secondCardProduct] = data.filter(
        (product) => product.position === 'card2'
    );
    const [thirdCardProduct] = data.filter(
        (product) => product.position === 'card3'
    );

    return (
        <div className="relative">
            <Overlay />
            {isLoading && <Loader />}
            <div
                className="50 relative flex min-h-[31.88rem] w-full flex-col bg-[#191919]
                            bg-[url(/assets/home/mobile/image-header.jpg)] bg-contain
                            bg-[center_100%] 
                            bg-no-repeat text-white sm:min-h-[45.6rem] sm:bg-[url(/assets/home/tablet/image-header.jpg)] lg:bg-[url(/assets/home/desktop/image-hero.jpg)]"
            >
                <NavBar />
                <section
                    className="container flex w-full flex-grow flex-col items-center justify-center text-center
                     lg:items-start"
                >
                    <h6 className="mb-4 text-overline uppercase opacity-50">
                        new product
                    </h6>
                    <h1
                        className="mb-6 max-w-[20.5rem] text-heading-3  uppercase 
                    md:max-w-[25rem] md:text-heading-1
                    lg:text-left"
                    >
                        {heroSectionProduct.name}
                    </h1>
                    <p className="mb-[1.75rem] max-w-[20.5rem] text-p opacity-75 md:mb-10 md:max-w-[22rem] lg:text-left">
                        {heroSectionProduct.description}
                    </p>
                    <ButtonDefault
                        content="See product"
                        className="bg-orange hover:bg-orange-lighter"
                        link={generateProductUrlbasedOnSlug(
                            heroSectionProduct.slug
                        )}
                    />
                </section>
            </div>
            <div className="container">
                <CategoryCardList />
                <section
                    className="mb-32 lg:[&_.card:first-of-type]:flex-row [&_.card:not(:last-child)]:mb-6 md:[&_.card:not(:last-child)]:mb-12
                                [&_.card]:flex [&_.card]:flex-col [&_.card]:justify-center
                                [&_.card]:rounded-lg [&_.card]:bg-cover [&_.card]:px-6 
                                sm:[&_.card]:px-12 lg:[&_.card]:px-24"
                >
                    <div
                        className="card min-h-[37.5rem] items-center overflow-hidden bg-orange
                                    bg-[url(/assets/home/desktop/pattern-circles.svg)] bg-[50%_-120px]
                                    bg-no-repeat sm:bg-[50%_-200px] lg:h-[35rem] lg:bg-[-225px]"
                    >
                        <Image
                            linkObj={firstCardProduct.image}
                            className="mb-14 h-[12.9rem] w-[10.7rem] sm:h-[14.8rem] sm:w-[12.3rem] lg:mb-0 lg:mr-36 lg:mt-[8rem] lg:h-[30.8rem] lg:w-[25.6rem]"
                            alt={firstCardProduct.name}
                        />
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <h2 className="mb-6 text-heading-3 uppercase text-white lg:text-heading-1">
                                {firstCardProduct.name}
                            </h2>
                            <p className="mb-6 max-w-[20.5rem] text-p text-white opacity-75 md:max-w-[22rem]">
                                {firstCardProduct.description}
                            </p>
                            <ButtonDefault
                                content="see product"
                                className="bg-black hover:bg-gray-700"
                                link={generateProductUrlbasedOnSlug(
                                    firstCardProduct.slug
                                )}
                                moveToTop
                            />
                        </div>
                    </div>
                    <div
                        className="card min-h-[19rem] 
                                bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] 
                                sm:h-[20rem] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]
                                lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]"
                    >
                        <h2 className="mb-6 text-heading-4 uppercase text-black">
                            {secondCardProduct.name}
                        </h2>
                        <ButtonDefaultOutline
                            content="see product"
                            link={generateProductUrlbasedOnSlug(
                                secondCardProduct.slug
                            )}
                            moveToTop
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6">
                        <div
                            className="card h-[12.5rem] shrink-0 bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] bg-center 
                                        sm:h-[20rem] sm:w-1/2 sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)]
                                        lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)]"
                        ></div>

                        <div
                            className="card h-[12.5rem] bg-grey-white
                                        sm:h-[20rem] sm:w-1/2"
                        >
                            <h2 className="mb-6 text-heading-4 uppercase text-black">
                                {thirdCardProduct.name}
                            </h2>
                            <ButtonDefaultOutline
                                content="see product"
                                link={generateProductUrlbasedOnSlug(
                                    thirdCardProduct.slug
                                )}
                                moveToTop
                            />
                        </div>
                    </div>
                </section>
                <BestGearSection />
            </div>
            <Footer />
        </div>
    );
}
