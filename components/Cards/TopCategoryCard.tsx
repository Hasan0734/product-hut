import Link from 'next/link';
import React from 'react';

interface cardProps {
    category: any
}

const TopCategoryCard = ({ category }: cardProps) => {
    return (
        <>
            <div className='top_cate_card'>
                <div className='flex justify-center'>
                    <div className='bg-[#F6F7FB] rounded-full p-8 h-[220px] w-[220px] top_cat_img transition-all duration-300'>
                        <Link href={"/"}>
                            <img className='w-full' src={category.image} alt="" />
                        </Link>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <Link href={"/"}>
                        <h4 className='text-[#151875] text-[20px] josefin-font font-normal'>Mini LWC Chair</h4>
                    </Link>
                    <p className='text-[#151875] josefin-font text-[16px] font-normal'>$36.00</p>
                </div>
            </div>
        </>
    );
};

export default TopCategoryCard;