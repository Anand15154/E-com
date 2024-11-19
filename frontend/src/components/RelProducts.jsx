import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from './ProductItem'; // Assuming you have a ProductItem component for each product

const RelProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Filter by category and subCategory if provided
            let filteredProducts = products.filter((item) => {
                const isCategoryMatch = category ? item.category === category : true;
                const isSubCategoryMatch = subCategory ? item.subCategory === subCategory : true;
                return isCategoryMatch && isSubCategoryMatch;
            });

            // Limit the related products to the first 5
            setRelated(filteredProducts.slice(0, 4));
        }
    }, [products, category, subCategory]);

    console.log("related", related);
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            {/* Check if there are related products */}
            {related.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {related.map((item, index) => (
                        <ProductItem
                            key={item._id || index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl py-4">No related products available</p>
            )}
        </div>
    );
}

export default RelProducts;
