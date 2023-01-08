import React from 'react';
import ByColor from './ByColor';
import Categories from './Categories';
import DiscountOffer from './DiscountOffer';
import PriceRange from './PriceRange';
import ProductBrand from './ProductBrand';
import RatingItem from './RatingItem';

const Filter = () => {
    return (
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
    );
};

export default Filter;