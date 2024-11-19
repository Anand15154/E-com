import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
    const { productId } = useParams();
    const { products, currency } = useContext(ShopContext);

    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = () => {
        const product = products.find((item) => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image?.[0] || '');
        }
    };

    useEffect(() => {
        if (products && productId) {
            fetchProductData();
        }
    }, [productId, products]);

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Images */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {productData.image?.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt="Product Thumbnail"
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="Product" />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img className="w-3.5" src={assets.star_icon} alt="Star" />
                        <img className="w-3.5" src={assets.star_icon} alt="Star" />
                        <img className="w-3.5" src={assets.star_icon} alt="Star" />
                        <img className="w-3.5" src={assets.star_icon} alt="Star" />
                        <img className="w-3.5" src={assets.star_dull_icon} alt="Dull Star" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes?.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className='bg-black text-white pax-8 py-3 text-s active:bg-gray-700'> ADD TO CART</button>
                    <hr className='mt-8 sm:w-w/5'></hr>
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'></div>
                    <p>100% Original product</p>
                    <p>COD available</p>
                    <p> Best return & exchange Policy within 7 days</p>

                </div>
            </div>

            {/** --------- Description & Review Section */}
        </div>
    ) : (
        <div className="opacity-100 text-center">Loading...</div>
    );
};

export default Product;
