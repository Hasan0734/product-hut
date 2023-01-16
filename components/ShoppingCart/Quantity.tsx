import React from 'react';
import { Minus, Plus } from 'react-feather';

const Quantity = ({quantity, setQuantity }:any) => {

    return (
        <div className='flex items-center justify-center'>
            <button
                onClick={() => quantity < 100 && setQuantity(quantity + 1)} className='bg-[#E7E7EF]'>
                <Plus />
            </button>
            {/* <input className='w-14 px-1 text-black bg-[#F0EFF2] text-[17px] focus:outline-none'
                onChange={(e) => setQuanity(Number(e.target.value))}
                // value={quantiy}
                min={1}
                max={100}
                defaultValue={1}
                maxLength={3}
                onWheel={() => console.log("Mouse scroll not work on quantity!")}
                type="number" /> */}
            <div className='w-10 px-1 text-black bg-[#F0EFF2] text-[16px] '>
                {quantity}
            </div>
            <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className='bg-[#E7E7EF]'>
                <Minus />
            </button>
        </div>
    );
};

export default Quantity;