import data from './data.json';


//to-do: implement a api for shop data
export function getAllData() {
    return data;
}
const allProducts = getAllData()

export function getCategoryProducts(category) {
    const currentCategoryProducts = allProducts && allProducts.filter(product => product.category === category)
    currentCategoryProducts.sort((current,next)=> {
        if(current.new === next.new){
            return 0
        } else if(next.new === 'true'){
            return -1
        } else {
            return 1
        }
    })
    return currentCategoryProducts
}
export function getProductData(productId) {
    //console.log(productId)
    const product = allProducts.filter(product => product.slug === productId)
    return product
}