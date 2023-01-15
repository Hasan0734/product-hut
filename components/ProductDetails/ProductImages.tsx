import React, { useState } from 'react';

const ProductImages = () => {
    const [image, setImage] = useState("/assets/product/Rectangle 138.png")

    return (
        <div className='flex flex-col xl:flex-row gap-5'>
            <div className='order-2 xl:order-1 h-auto xl:h-[450px] bg-pink-100 w-full 
                                    xl:w-[280px] overflow-y-scroll md:overflow-y-scroll 
                                     overflow-x-hidden md:overflow-x-scroll 
                                      scrollbar-thin scrollbar-track-[#cfc1ff76]
                                      scrollbar-thumb-[#fe78e188] scrollbar-rounded-md
                                    '>

                <div className='flex  xl:flex-col flex-row w-full overflow-y-scroll xl:overflow-y-auto'>
                    <div className='min-w-[210px] max-w-[210px] h-[210px] p-3 flex-shrink-2'>
                        <img
                            onClick={() => setImage("/assets/product/Rectangle 134.png")}
                            className='cursor-pointer w-full h-full rounded-md'
                            src="/assets/product/Rectangle 134.png"
                            alt="product images" />
                    </div>
                </div>
            </div>
            <div className='order-1  flex items-center justify-center 
                    xl:order-2 h-[350px] md:h-[450px]  w-full xl:w-[450px]'>
                <img className='w-full sm:w-3/5 lg:w-3/4 xl:w-full h-full' src={image} alt="product images" />
            </div>
        </div>
    );
};

export default ProductImages;