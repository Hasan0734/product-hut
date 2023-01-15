import React from 'react';
import CartItem from './CartItem';

const CartItems = () => {
    return (
        <table className='w-full'>
            <thead>
                <tr>
                    <th className='josefin-font text-xl font-bold text-[#1D3178]  pb-6 text-start '>Product</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-start '>Price</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Quantity</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Total</th>
                </tr>
            </thead>
            <tbody className="">
                <CartItem />
            </tbody>
        </table>
    );
};

export default CartItems;