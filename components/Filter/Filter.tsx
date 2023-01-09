import React from 'react';
import ByColor from './ByColor';
import Categories from './Categories';
import DiscountOffer from './DiscountOffer';
import PriceRange from './PriceRange';
import ProductBrand from './ProductBrand';
import RatingItem from './RatingItem';
import SMDeviceFilter from './SMDeviceFilter';

const Filter = ({ toggle, setToggle }: any) => {
    return (
        <>
            <div
                className={`${toggle ? " hidden lg:block " : " hidden "} bg-white py-5 sticky top-24 z-20 h-screen  scrollbar-thin  scrollbar-hide scrollbar-rounded-lg scrollbar-thumb-blue-100 scrollbar-track-gray-100 w-[300px]`}>
                <div className='pb-20'>
                    <div className='flex flex-col gap-5 '>
                        <ProductBrand />
                        <DiscountOffer />
                        <RatingItem />
                        <Categories />
                        <PriceRange />
                        <ByColor />
                    </div>

                </div>
            </div>
            <SMDeviceFilter smallFilter={toggle} setSmallFilter={setToggle} />
        </>
    );
};

export default Filter;