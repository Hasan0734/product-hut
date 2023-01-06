import React from 'react';

interface itemProps {
    id: number,
    title: string,
    icon: string,
    description: string
}

const ShopexOfferCard = ({item}:any) => {
    return (
        <div className='bg-white px-5 py-10 drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)]'>
            <div className='flex justify-center w-full py-4'>
                <img className='w-[70px]' src={item.icon} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-xl leading-8 font-bold text-[#151875] josefin-font'>{ item.title}</h3>
                <p className='text-sm leading-8 lato-font'>{ item.description}</p>
            </div>
        </div>
    );
};

export default ShopexOfferCard;