import React, { useState } from 'react';
import { Minus, Plus, X } from 'react-feather';

const Quantity = () => {
    const [quantiy, setQuanity] = useState(1)

    return (
        <div className='flex items-center justify-center'>
            <button
                onClick={() => setQuanity(quantiy + 1)} className='bg-[#E7E7EF]'>
                <Plus />
            </button>
            <input className='w-14 px-1 text-black bg-[#F0EFF2] text-[17px] focus:outline-none'
                onChange={(e) => setQuanity(Number(e.target.value))}
                value={quantiy}
                min={1}
                max={100}
                onWheel={() => console.log("Mouse scroll not work on quantity!")}
                type="number" />
            <button
                onClick={() => setQuanity(quantiy - 1)}
                className='bg-[#E7E7EF]'>
                <Minus />
            </button>
        </div>
    );
};

export default Quantity;