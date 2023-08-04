import Image from "../../ui/Image"
import {ButtonDefault} from "../../ui/Buttons"

function ProductCard({data, index}) {
    return (
        <div className={`flex flex-col gap-6 w-full mt-16 mb-28
                        sm:mt-28
                        ${index % 2 === 1 ?'lg:flex-row':'lg:flex-row-reverse'} lg:gap-28 lg: mt-40`}>
            <div className="bg-grey-white relative flex flex-col mb-2 items-center justify-center w-full pt-8 pb-12 rounded-lg">
                <Image 
                    linkObj={data.categoryImage} 
                    width={{mobile:'220', tablet:'550', desktop:'349'}}
                    alt={data.slug}
                    className="h-auto"
                />
            </div>
            <div className="flex flex-col gap-6 w-full items-center justify-center lg:items-start">
                {data.new && (<div className="text-overline text-orange">NEW PRODUCT</div>)}
                <div className="text-heading-4 uppercase text-center">
                    {data.name}
                </div>
                <div className="text-center text-p opacity-50 lg:text-left max-w-[35.75rem]">
                    {data.description}
                </div>
                <ButtonDefault content="see product" className="bg-orange hover:bg-orange-lighter"/>
            </div>
            
        </div>
    )
}

export default ProductCard
