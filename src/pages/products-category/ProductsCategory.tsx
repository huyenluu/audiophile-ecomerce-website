import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import CategoryCardList from '../../ui/CategoryCardList';
import { Product } from '../../types/product.type';

function ProductsCategory() {
    const data = useLoaderData() as Product[] | undefined;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    if (data === undefined) {
        return null;
    }

    return (
        <div className="container">
            {data.map((product, index) => (
                <ProductCard
                    key={product.slug}
                    data={product}
                    index={index}
                />
            ))}
            <CategoryCardList />
        </div>
    );
}
export default ProductsCategory;
