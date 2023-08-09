import supabase from "./supabase"
import { sortProductsNewFirst } from "../utilities/utilities"

export function getCategoriesName() {
    // const uniqueCategoryNameArray = [...new Set(allProducts.map(obj => obj.category))]
    // return uniqueCategoryNameArray;
    return ['speakers', 'headphones', 'earphones']
}

export async function getAllProducts() {
    const {data, error} = await supabase
    .from('products')
    .select('*')
    if(error) {
        console.error(error)
        throw new Error("couldn't load data")
    }
    return data
}

export async function getProductsByCategory(category) {

    let { data: products, error } = await supabase
        .from('products')
        .select("*")
        // Filters
        .ilike('category', category)
        if(error) {
            console.error(error)
            throw new Error("Couldn't load data")
        }

        return sortProductsNewFirst(products)
}

export async function getProductById(slug) {

    let { data: product, error } = await supabase
        .from('products')
        .select("*")
        // Filters
        .eq('slug', slug)
        if(error) {
            console.error(error)
            throw new Error("Couldn't load data")
        }
        return product
}

export async function deleteRowProducts() {
    const {error} = await supabase
    .from('products')
    .delete()
    .eq('id', '1')

    if(error) {
        console.error(error)
        throw new Error("couldn't delete data")
    } else {
        console.log('done')
    }
}

export function addDataToDb(dataToUpdate) {
    let counter = 0;
    const addData = async () => {
        const { data, error } = await supabase
        .from('products')
        .insert(dataToUpdate)
        .select()
        if(error) {
            console.error(error)
            throw new Error("couldn't delete data")
        } else {
            console.log(data)
        }
        counter++;
    }
    if(counter > 1){
        return
    }else {
        return addData();
    }
}
