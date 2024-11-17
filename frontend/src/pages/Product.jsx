import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(ShopContext);

    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');

    const fetchProductData = () => {
        products.forEach((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                console.log(item);
            }
        });
    };

    useEffect(() => {
        if (products && productId) {
            fetchProductData();
        }
    }, [productId, products]);

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Product Data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                <div>
                    <img src={image} alt={productData.name} className="w-full h-auto" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{productData.name}</h1>
                    <p className="text-lg">{productData.description}</p>
                    {/* Additional product details can be rendered here */}
                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0">Loading...</div>
    );
};

export default Product;
