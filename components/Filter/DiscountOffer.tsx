import React from 'react';

const offers = [
    { id: 1, name: "20% Cashback" },
    { id: 2, name: "5% Cashback Offer" },
    { id: 3, name: "25% Discount Offer" }
]

const DiscountOffer = () => {
    return (
        <div className=''>
            <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Discount Offer</h3>
            <ul>
                {offers.map((brand: any) => <li key={brand.id} className='flex gap-2 items-center'>
                    <div className="form-control">
                        <label className="cursor-pointer label flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-error rounded-sm bg-[#FFDBF1]" />
                            <span className="label-text text-[16px] text-[#7E81A2]">{brand.name}</span>
                        </label>
                    </div>

                </li>)}
            </ul>
        </div>
    );
};

export default DiscountOffer;