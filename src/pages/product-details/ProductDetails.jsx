import { useLoaderData, useNavigate } from "react-router-dom"
import ProductCard from "../products-category/ProductCard"
import CategoryCardList from "../../ui/CategoryCardList"
import Image from "../../ui/Image"
import { ButtonDefault } from "../../ui/Buttons"
import { generateProductUrlbasedOnSlug } from "../../utilities/utilities"
//import { useEffect } from "react"

//to-do: add link to see product btn
//to-do: image-galery, other products suggestion
//to-do: split features text in 2 paragrafs
//to-do: check if scroll to top works in all situation
function ProductDetails() {
    const [product] = useLoaderData()
    const navigate = useNavigate()
    // useEffect(() => {
    //     window.scroll(0,0)
    // },[])

    return (
        <div className="container">
            <button 
                onClick={() => {
                    navigate(-1)
                    window.scroll(0,0)
                }}
                className="absolute top-6 text-sm opacity-50 lg:top-16"
            >
                Go back
            </button>
            <ProductCard data={product} showPrice/>
            <div className="mb-20 lg:flex lg:justify-between lg:gap-20">
                <div className="mb-20 lg:w-[70%]">
                    <h2 className="text-heading-5 uppercase sm:text-heading-3 mb-6">features</h2>
                    <p className="text-p opacity-50">{product.features}</p>
                </div>
                <div className="w-full sm:flex sm:flex-row sm:justify-between lg:w-[30%] lg:flex-col lg:justify-start">
                    <h2 className="text-heading-5 uppercase sm:text-heading-3 mb-6 sm:w-1/2 lg:w-full">in the box</h2>
                    <ul className="text-p sm:w-1/2 lg:w-full">
                        {product.includes.map((item, index) => (
                            <li key={index} className="mb-2">
                                <span className="inline-block mr-4 text-orange font-bold">{`${item.quantity}x`}</span>
                                <span className="inline-block mr-4 opacity-50">{item.item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mb-28
                            sm:flex-row lg:gap-8">
                <div className="flex flex-col items-center gap-4 lg:gap-8 sm:h-full">
                    <Image 
                        linkObj={product.gallery.first} 
                        className="h-[174px] lg:h-[280px] rounded-lg"
                        alt="product image galerie 1"/>
                    <Image 
                        linkObj={product.gallery.second} 
                        className="h-[174px] lg:h-[280px] rounded-lg"
                        alt="product image galerie 2"/>
                </div>
                <div>
                    <Image
                        linkObj={product.gallery.third}     
                        className="h-[368px] lg:h-[592px] rounded-lg" 
                        alt="product image galerie 3"/>
                </div>
            </div>
            <div className="sm:mb-28">
                <h3 className="w-full text-heading-5 uppercase text-center mb-10 sm:text-heading-3">You also may like</h3>
                <ul className="sm:flex sm:justify-between">
                    {product.others.map((item) =>
                        (<li key={item.name} className="flex flex-col items-center gap-8 mb-12 sm:mb-0 sm:w-1/3 sm:gap-8">
                            <Image 
                                linkObj={item.image} 
                                alt={item.slug}
                                className="h-auto w-[95%]"
                            />
                            <h5 className="w-full text-heading-5 uppercase text-center">{item.name}</h5>
                            <ButtonDefault 
                                content="see product" 
                                className="bg-orange hover:bg-orange-lighter"
                                link={generateProductUrlbasedOnSlug(item.slug)}
                                moveToTop
                            />
                        </li>)
                    )}
                </ul>
            </div>
            <CategoryCardList/>
        </div>
    )
}

export default ProductDetails
