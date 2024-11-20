import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_free = 0, getCartAmount } = useContext(ShopContext);

    // Store cart amount in a variable to avoid multiple calls
    const cartAmount = getCartAmount();

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                        {currency}{cartAmount}.00
                    </p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>
                        {currency}{delivery_free}.00
                    </p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>
                        {currency}{cartAmount === 0 ? 0 : cartAmount + delivery_free}.00
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
