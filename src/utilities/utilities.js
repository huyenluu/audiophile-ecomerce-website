import { getCategoriesName } from "../services/apiEshop"

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