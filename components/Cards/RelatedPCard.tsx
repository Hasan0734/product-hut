import React from 'react';
import Rating from '../Rating/Rating';

const RelatedPCard = ({ product }: any) => {
    return (
        <div className='p-2 bg-white shadow-lg'>
            <div>
                <div className='w-full'>
                    <img className='w-full h-[350px]' src={product.image} alt="" />
                </div>
                <div className='py-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[#151875] font-semibold josefin-font'>{product.name}</h2>
                        <div className='flex '>
                            <Rating rating={product.rating} />
                        </div>
                    </div>
                    <h5 className='text-[#151875] text-sm font-semibold josefin-font'>${product.price}.00</h5>
                </div>
            </div>
        </div>

    );
};

export default RelatedPCard;