import React from 'react';
import ActiveRating from '../ActiveRating/ActiveRating';
import Rating from './Rating';

const ratings = [
    { id: 1, rate: 5 },
    { id: 2, rate: 4 },
    { id: 3, rate: 3 },
    { id: 4, rate: 2 },
    { id: 5, rate: 1 },
]

const RatingItem = () => {
    return (
        <>
            <div className=''>
                <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Rating Item</h3>
                <ul>
                    {ratings.map((rating: any) => <li key={rating.id} className='flex gap-2 items-center'>
                        <div className="form-control">
                            <label className="cursor-pointer label flex items-center gap-2 ">
                                <input type="checkbox" className="checkbox checkbox-xs checkbox-warning rounded-sm bg-[#FFF6DA]" />
                                <div className='flex'>
                                    <Rating rating={rating.rate} />
                                </div>
                                <div className='text-sm text-black josefin-font'>(200)</div>
                            </label>
                        </div>

                    </li>)}
                </ul>
            </div>
        </>
    );
};

export default RatingItem;