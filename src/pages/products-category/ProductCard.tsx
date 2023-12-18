import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Image from '../../ui/Image';
import { ButtonDefault } from '../../ui/Buttons';
import Counter from '../../components/Counter';
import AddToCartButton from '../../components/AddToCart';
import { Product } from '../../types/product.type';

interface ProductCardProps {
    data: Product;
    index?: number;
    showPrice?: boolean;
}

function ProductCard({ data, index, showPrice }: ProductCardProps) {
    let location = useLocation();
    const [payload, setPayload] = useState({
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
        quantity: 1,
        totalPrice: data.price * 1,
    });
    const onCounterChange = (value: number) => {
        setPayload((payload) => {
            return {
                ...payload,
                quantity: value,
                totalPrice: data.price * value,
            };
        });
    };

    return (
        <div
            className={`mb-28 mt-16 flex w-full flex-col gap-6
                        sm:mt-28
                        ${
                            index % 2 === 1 && !showPrice
                                ? 'lg:flex-row-reverse'
                                : 'lg:flex-row'
                        } lg:mt-40 lg:gap-28`}
        >
            <div className="relative mb-2 flex w-full flex-col items-center justify-center rounded-lg bg-grey-white pb-12 pt-8">
                <Image
                    linkObj={data.categoryImage}
                    alt={data.slug}
                    className="h-auto w-[220px] sm:w-[550px] lg:w-[349px]"
                />
            </div>
            <div
                className={`flex w-full flex-col gap-6 ${
                    showPrice ? 'items-start' : 'items-center'
                } justify-center lg:items-start`}
            >
                {data.new && (
                    <div
                        className={`text-overline text-orange ${
                            showPrice ? 'text-left' : 'text-center sm:text-left'
                        }`}
                    >
                        NEW PRODUCT
                    </div>
                )}
                <h4
                    className={`text-heading-4 uppercase ${
                        showPrice ? 'text-left' : 'text-center sm:text-left'
                    }
                                sm:text-heading-2`}
                >
                    {data.name}
                </h4>
                <p
                    className={`${
                        showPrice ? 'text-left' : 'text-center sm:text-left'
                    }text-p max-w-[35.75rem] opacity-50 lg:text-left`}
                >
                    {data.description}
                </p>
                {!showPrice && (
                    <ButtonDefault
                        content="see product"
                        className="bg-orange hover:bg-orange-lighter"
                        link={`${location.pathname}/${data.slug}`}
                        moveToTop
                    />
                )}
                {showPrice && (
                    <div>
                        <div className="mb-6 text-heading-6">{`$${data.price}`}</div>
                        <div className="flex w-[18.5rem] items-center justify-between">
                            <Counter
                                key="counter-from-product-page"
                                onValueChange={onCounterChange}
                            />
                            <AddToCartButton payload={payload} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
