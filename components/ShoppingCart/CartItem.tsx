import Link from 'next/link';
import React, { useState } from 'react';
import { X } from 'react-feather';
import Quantity from './Quantity';

const CartItem = ({ product }: any) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <tr className='border-b mt-5'>
            <td className='flex gap-4 pt-4 max-w-xs'>
                <div className='w-[83px] h-[87px] py-2 relative'>
                    <img className='w-full h-full' src={product.image} alt="" />
                    <div className='absolute top-0 right-0'>
                        <X className='text-white bg-black rounded-full p-[3px] cursor-pointer' width={24} strokeWidth={3} />
                    </div>
                </div>
                <div>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-xl josefin-font text-black  font-semibold hover:underline cursor-pointer'>
                            {product.name}
                        </a>
                    </Link>
                    <p className='josefin- josefin-font text-sm'>Color: <span className='text-gray-800'>Brown</span></p>
                    <p className='josefin-font text-sm'>Size: <span className='text-gray-800'>XL</span></p>
                </div>
            </td>
            <td className=' pt-4'>
                ${product.price.toFixed(2)}
            </td>
            <td className='text-center pt-4'>
                <Quantity quantity={quantity} setQuantity={setQuantity} />
            </td>
            <td className='text-center pt-4'>
                ${(product.price * quantity).toFixed(2)}
            </td>
        </tr>
    );
};

export default CartItem;