import { useLocation } from "react-router-dom";
import Image from "../../ui/Image"
import {ButtonDefault} from "../../ui/Buttons"
import Counter from "../../components/Counter";

//to-do: add a function to split product name in 2 lines name/category name
function ProductCard({data, index, showPrice, handleClickBtnAdd}) {
    let location = useLocation()
    const getCounter = (counter) => {
        console.log(counter)
    }
    return (
        <div className={`flex flex-col gap-6 w-full mt-16 mb-28
                        sm:mt-28
                        ${index % 2 === 1 && !showPrice ?'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-28 lg:mt-40`}>
            <div className="bg-grey-white relative flex flex-col mb-2 items-center justify-center w-full pt-8 pb-12 rounded-lg">
                <Image 
                    linkObj={data.categoryImage} 
                    width={{mobile:'220', tablet:'550', desktop:'349'}}
                    alt={data.slug}
                    className="h-auto"
                />
            </div>
            <div className={`flex flex-col gap-6 w-full ${showPrice?'items-start':'items-center'} justify-center lg:items-start`}>
                {data.new && (<div className="text-overline text-orange">NEW PRODUCT</div>)}
                <h4 className="text-heading-4 uppercase text-center lg:text-left
                                sm:text-heading-2">
                    {data.name}
                </h4>
                <p className={`${showPrice?'items-start':'items-center'}text-p opacity-50 lg:text-left max-w-[35.75rem]`}>
                    {data.description}
                </p>
                {
                    !showPrice && 
                    <ButtonDefault 
                        content="see product" 
                        className="bg-orange hover:bg-orange-lighter"
                        link={`${location.pathname}/${data.slug}`}
                    />
                }
                {
                    showPrice &&
                    <div>
                        <div className="text-heading-6 mb-6">{`$${data.price}`}</div>
                        <div className="flex w-[18.5rem] justify-between items-center">
                            <Counter getCounter={getCounter}/>
                            <ButtonDefault 
                                content="add to card" 
                                className="bg-orange hover:bg-orange-lighter"
                                handleClick={handleClickBtnAdd}
                            />
                        </div>
                    </div>
                }
                
            </div>
            
        </div>
    )
}

export default ProductCard
