import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
    const { products, currency } = useContext(ShopContext);

    return (
        <div className="border-t pt-16">
            {/* Section Title */}
            <div className="text-2xl">
                <Title text1="MY" text2="ORDERS" />
            </div>

            {/* Orders List */}
            <div>
                {products.slice(1, 4).map((item, index) => (
                    <div
                        key={index}
                        className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    >
                        <div className="flex items-start gap-6 text-sm">
                            {/* Product Image */}
                            <img
                                src={item.images?.[0] || '/placeholder.png'} // Add a placeholder image
                                alt={item.name || 'Product Image'}
                                className="w-16 h-16 object-cover rounded-md"
                            />

                            {/* Product Details */}
                            <div className="sm:text-base font-medium">
                                <p>{item.name || 'Unknown Product'}</p>
                                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                                    <p className="text-lg">
                                        {currency}
                                        {item.price || '0.00'}
                                    </p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                    <p>
                                        Date: <span className="text-gray-400">{item.date || '25, July, 2024'}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex item-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base'>Ready To ship</p></div></div>
                        </div>

                        <button className='border px-4 py-2 text-sm font-medium rounded-sm'> Track Order</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
