import React from 'react';

const brands = [
    { id: 1, name: "Coaster Furniture" },
    { id: 2, name: "Fusion Dot High Fashion" },
    { id: 3, name: "Unique Furnitture Restor" },
    { id: 4, name: "Dream Furnitture Flipping" },
    { id: 5, name: "Young Repurposed" },
    { id: 6, name: "Green DIY furniture" },
]

const ProductBrand = () => {
    return (
        <div className=''>
            <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Product Brand</h3>
            <ul>
                {brands.map((brand: any) => <li key={brand.id} className='flex gap-2 items-center'>
                    <div className="form-control">
                        <label className="cursor-pointer label flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary rounded-sm bg-[#E5E0FC]" />
                            <span className="label-text text-[16px] text-[#7E81A2]">{ brand.name}</span>
                        </label>
                    </div>

                </li>)}
            </ul>
        </div>
    );
};

export default ProductBrand;