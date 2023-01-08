import React from 'react';

const categories = [
    { id: 1, name: "Prestashop" },
    { id: 2, name: "Magento" },
    { id: 3, name: "Bigcommerce" },
    { id: 4, name: "osCommerce" },
    { id: 5, name: "osCommerce" },
    { id: 6, name: "Bags" },
    { id: 7, name: "Accessories" },
    { id: 8, name: "Jewellery" },
    { id: 9, name: "Watches" },
]

const Categories = () => {
    return (
        <div className=''>
            <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Categories</h3>
            <ul>
                {categories.map((category: any) => <li key={category.id} className='flex gap-2 items-center'>
                    <div className="form-control">
                        <label className="cursor-pointer label flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-secondary rounded-sm bg-[#FFDBF1]" />
                            <span className="label-text text-[16px] text-[#7E81A2]">{category.name}</span>
                        </label>
                    </div>

                </li>)}
            </ul>
        </div>
    );
};

export default Categories;