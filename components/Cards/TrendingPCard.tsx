import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface productProps {
    id: number,
    title: string,
    price: number,
    prevPrive: number,
    image: string
}

const TrendingPCard = ({ product }: any) => {
    return (
        <Link href={"/"} legacyBehavior>  
            <a >
                
                <div className='bg-white p-2 drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)]'>
                    <div className='bg-[#F5F6F8] p-4  h-[250px]'>
                        <img className='w-full h-full' src={product.image} alt={product.title} />
                    </div>
                    <div className='py-4'>
                        <h4 className='text-[#151875] text-sm lato-font font-bold leading-7 text-center'>{product.title}</h4>
                        <div className='flex justify-center gap-x-3'>
                            <h4 className='text-xs lato-font text-[#151875] font-bold' >${product.price}.00</h4>
                            <h4 className='text-xs lato-font text-gray-400 font-bold decoration-2 line-through' >${product.prevPrice}.00</h4>
                        </div>
                    </div>
                </div>
           </a>
        </Link>
    );
};

export default TrendingPCard;