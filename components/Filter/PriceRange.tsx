import React from 'react';

const prices = [
    { id: 1, label: "$0.00 - $150.00" },
    { id: 2, label: "$150.00 - $350.00" },
    { id: 3, label: "$150.00 - $504.00" },
    { id: 3, label: "$450.00 +" }
]

const PriceRange = () => {
    return (
        <div className=''>
            <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Discount Offer</h3>
            <ul>
                {prices.map((price: any) => <li key={price.id} className='flex gap-2 items-center'>
                    <div className="form-control">
                        <label className="cursor-pointer label flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-error rounded-sm bg-[#FFDBF1]" />
                            <span className="label-text text-[16px] text-[#7E81A2]">{price.label}</span>
                        </label>
                    </div>

                </li>)}
            </ul>
        </div>
    );
};

export default PriceRange;