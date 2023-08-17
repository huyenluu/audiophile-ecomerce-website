import { useLoaderData, useNavigate } from 'react-router-dom';
import ProductCard from '../products-category/ProductCard';
import CategoryCardList from '../../ui/CategoryCardList';
import Image from '../../ui/Image';
import { ButtonDefault } from '../../ui/Buttons';
import { generateProductUrlbasedOnSlug } from '../../utilities/utilities';
//import { useEffect } from "react"

//to-do: split features text in 2 paragrafs

function ProductDetails() {
    const [product] = useLoaderData() || [];
    const navigate = useNavigate();
    if (product === undefined) return null;
    return (
        <div className="container">
            <button
                onClick={() => {
                    navigate(-1);
                }}
                className="absolute top-6 text-sm opacity-50 sm:top-12 lg:top-16"
            >
                Go back
            </button>
            <ProductCard data={product} showPrice />
            <div className="mb-20 lg:flex lg:justify-between lg:gap-20">
                <div className="mb-20 lg:w-[70%]">
                    <h2 className="mb-6 text-heading-5 uppercase sm:text-heading-3">
                        features
                    </h2>
                    <p className="text-p opacity-50">{product.features}</p>
                </div>
                <div className="w-full sm:flex sm:flex-row sm:justify-between lg:w-[30%] lg:flex-col lg:justify-start">
                    <h2 className="mb-6 text-heading-5 uppercase sm:w-1/2 sm:text-heading-3 lg:w-full">
                        in the box
                    </h2>
                    <ul className="text-p sm:w-1/2 lg:w-full">
                        {product.includes.map((item, index) => (
                            <li key={index} className="mb-2">
                                <span className="mr-4 inline-block font-bold text-orange">{`${item.quantity}x`}</span>
                                <span className="mr-4 inline-block opacity-50">
                                    {item.item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className="mb-28 flex flex-col items-center justify-center gap-4
                            sm:flex-row lg:gap-8"
            >
                <div className="flex flex-col items-center gap-4 sm:h-full lg:gap-8">
                    <Image
                        linkObj={product.gallery.first}
                        className="h-[174px] rounded-lg lg:h-[280px]"
                        alt="product image galerie 1"
                    />
                    <Image
                        linkObj={product.gallery.second}
                        className="h-[174px] rounded-lg lg:h-[280px]"
                        alt="product image galerie 2"
                    />
                </div>
                <div>
                    <Image
                        linkObj={product.gallery.third}
                        className="h-[368px] rounded-lg lg:h-[592px]"
                        alt="product image galerie 3"
                    />
                </div>
            </div>
            <div className="sm:mb-28">
                <h3 className="mb-10 w-full text-center text-heading-5 uppercase sm:text-heading-3">
                    You also may like
                </h3>
                <ul className="sm:flex sm:justify-between">
                    {product.others.map((item) => (
                        <li
                            key={item.name}
                            className="mb-12 flex flex-col items-center gap-8 sm:mb-0 sm:w-1/3 sm:gap-8"
                        >
                            <Image
                                linkObj={item.image}
                                alt={item.slug}
                                className="h-auto w-[95%]"
                            />
                            <h5 className="w-full text-center text-heading-5 uppercase">
                                {item.name}
                            </h5>
                            <ButtonDefault
                                content="see product"
                                className="bg-orange hover:bg-orange-lighter"
                                link={generateProductUrlbasedOnSlug(item.slug)}
                                moveToTop
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <CategoryCardList />
        </div>
    );
}

export default ProductDetails;
