import { useLoaderData, useParams } from "react-router-dom"
import { getEshopData } from "../../services/apiEshop"
import ProductCard from './ProductCard'
import CategoryCardList from '../../ui/CategoryCardList'

function ProductsCategory() {
    const productsData = useLoaderData()
    const { categoryName } = useParams()
    const currentCategoryProducts = productsData && productsData.filter(product => product.category === categoryName)
    currentCategoryProducts.sort((current,next)=> {
        if(current.new === next.new){
            return 0
        } else if(next.new === 'true'){
            return -1
        } else {
            return 1
        }
    })

    return (
        <div className="container">
            {currentCategoryProducts.map((product, index) => {
                return <ProductCard key={product.slug} data={product} index={index}/>
            })}
            <CategoryCardList/>
        </div>
    )
}
export function loader() {
    const productsData = getEshopData()
    return productsData
}
export default ProductsCategory

