import { useLoaderData, useNavigate } from "react-router-dom"
import ProductCard from "../products-category/ProductCard"
import CategoryCardList from "../../ui/CategoryCardList"
//import { useEffect } from "react"

//to-do: image-galery, other products suggestion
// to-do: split features text in 2 paragrafs
//to-do: check if scroll to top works in all situation
function ProductDetails() {
    const [product] = useLoaderData()
    const navigate = useNavigate()
    console.log(product)
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
                className="absolute top-6 text-sm opacity-50 lg:top-20"
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
            <CategoryCardList/>
        </div>
    )
}

export default ProductDetails
