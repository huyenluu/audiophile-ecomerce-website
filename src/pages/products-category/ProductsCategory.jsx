import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"
import ProductCard from './ProductCard'
import CategoryCardList from '../../ui/CategoryCardList'

function ProductsCategory() {
    const productsData = useLoaderData() || [];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    },[])
    if(productsData === undefined) return null
    return (
        <div className="container">
            {productsData.map((product, index) => {
                return <ProductCard key={product.slug} data={product} index={index}/>
            })}
            <CategoryCardList/>
        </div>
    )
}
export default ProductsCategory

