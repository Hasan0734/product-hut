import React, { useState } from 'react';
import Link from 'next/link';
import Rating from '../Rating/Rating';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
const ProductDetails = () => {

    return (
        <div className='rounded-sm drop-shadow-[0_0_25px_10px_rgba(0,0,0,0.05)] p-0 md:p-4'>
            <div className='grid grid-cols-1  xl:grid-cols-2 gap-5'>
                <ProductImages />
                <ProductContent/>
            </div>
        </div>
    );
};

export default ProductDetails;