import { Link, useLocation } from "react-router-dom"
import Image from "../../ui/Image"
import {ButtonDefault} from "../../ui/Buttons"
import Counter from "../../components/Counter"
import { useDispatch } from "react-redux"
import { addItem } from "../../redux/cartSlice"

//to-do: add a function to split product name in 2 lines name/category name
function ProductCard({data, index, showPrice}) {
    let location = useLocation()
    const dispatch = useDispatch();
    let payload = {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image.mobile,
        quantity: 1,
        totalPrice: data.price * 1,
    }
    const onCounterChange = (value) => {
        payload = {
            ...payload,
            quantity: value,
            totalPrice: data.price * value,
        }
    }
    
    return (
        <div className={`flex flex-col gap-6 w-full mt-16 mb-28
                        sm:mt-28
                        ${index % 2 === 1 && !showPrice ?'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-28 lg:mt-40`}>
            <div className="bg-grey-white relative flex flex-col mb-2 items-center justify-center w-full pt-8 pb-12 rounded-lg">
                <Image 
                    linkObj={data.categoryImage} 
                    alt={data.slug}
                    className="h-auto w-[220px] sm:w-[550px] lg:w-[349px]"
                />
            </div>
            <div className={`flex flex-col gap-6 w-full ${showPrice?'items-start':'items-center'} justify-center lg:items-start`}>
                {data.new && (<div className={`text-overline text-orange ${showPrice?'text-left':'text-center sm:text-left'}`}>NEW PRODUCT</div>)}
                <h4 className={`text-heading-4 uppercase ${showPrice?'text-left':'text-center sm:text-left'}
                                sm:text-heading-2`}>
                    {data.name}
                </h4>
                <p className={`${showPrice?'text-left':'text-center sm:text-left'}text-p opacity-50 lg:text-left max-w-[35.75rem]`}>
                    {data.description}
                </p>
                {
                    !showPrice && 
                    <ButtonDefault 
                        content="see product" 
                        className="bg-orange hover:bg-orange-lighter"
                        link={`${location.pathname}/${data.slug}`}
                        moveToTop
                    />
                }
                {
                    showPrice &&
                    <div>
                        <div className="text-heading-6 mb-6">{`$${data.price}`}</div>
                        <div className="flex w-[18.5rem] justify-between items-center">
                            <Counter key="counter-from-product-page" onValueChange={onCounterChange}/>
                            <Link>
                                <ButtonDefault 
                                    content="add to cart" 
                                    className="bg-orange hover:bg-orange-lighter"
                                   onClick={() => dispatch(addItem(payload))}
                                />
                            </Link>
                        </div>
                    </div>
                }
                
            </div>
            
        </div>
    )
}

export default ProductCard
