import React from 'react';
import OutsideClickHandler from "react-outside-click-handler"
import ByColor from './ByColor';
import Categories from './Categories';
import DiscountOffer from './DiscountOffer';
import PriceRange from './PriceRange';
import ProductBrand from './ProductBrand';
import RatingItem from './RatingItem';

const SMDeviceFilter = ({ smallFilter, setSmallFilter }: any) => {
    return (
        <div className={`relative z-[500] ${smallFilter ? 'visible opacity-1 lg:invisible lg:opacity-0' : 'invisible opacity-0 '}  duration-200 `} role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div className="fixed inset-0 z-40 flex">

                <div className={`relative ml-auto flex h-full ${smallFilter ? 'w-full' : 'w-0'}  duration-500 max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl`}>
                    <OutsideClickHandler onOutsideClick={() => setSmallFilter(false)}>
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                            <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <svg onClick={() => setSmallFilter(false)} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Filters */}
                        <div className='px-2 py-3'>
                            <ProductBrand />
                            <DiscountOffer />
                            <RatingItem />
                            <Categories />
                            <PriceRange />
                            <ByColor />
                        </div>
                    </OutsideClickHandler>
                </div>
            </div>
        </div>
    );
};

export default SMDeviceFilter;


