import { useLoaderData } from "react-router-dom";
import { getEshopData } from "../../services/apiEshop"

function ProductsCategory() {
    const productsData = useLoaderData()
    console.log(productsData)

    return (
        <div>
            Product Catefory page
        </div>
    )
}
export function loader() {
    const productsData = getEshopData()
    return productsData
}
export default ProductsCategory

