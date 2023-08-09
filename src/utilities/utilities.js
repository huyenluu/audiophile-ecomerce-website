import { getCategoriesName } from "../services/apiProducts"

export const sortProductsNewFirst = (productsArr) => {
    return productsArr.sort((current,next)=> {
        if(current.new === next.new){
            return 0
        } else if(next.new === 'true'){
            return -1
        } else {
            return 1
        }
    })
}

export const generateProductUrlbasedOnSlug = (slug) => {
    const splitedSlug = slug.split("-")
    const categoryNameArr = getCategoriesName()
    let productCategoryName
    splitedSlug.forEach(name => {
        categoryNameArr.forEach((categoryName) => {
            if(categoryName === name || categoryName.slice(0,-1) === name) {
                productCategoryName = categoryName
            } 
        })
    })
    return `/category/${productCategoryName}/${slug}`
}