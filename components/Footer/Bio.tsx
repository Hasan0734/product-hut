import React from 'react'

function Bio() {
    return (
        <div className='col-span-12 lg:col-span-4'>
            <h1 className='text-xl lg:text-[38px] leading-[45px] josefin-font text-[#000000] font-bold'>Product-Hut</h1>
            <form className='mt-5'>
                <div className='flex w-full  sm:w-3/4  lg:w-full justify-between bg-white p-[2px] rounded-md'>
                    <input className='bg-white outline-none  px-2 py-1 text-[#8A8FB9] text-[16px] font-normal flex-1 lato-font' placeholder='Enter Email Address' type="text" />

                    <button className='bg-[#FB2E86] px-5 py-2 text-white
                   rounded-md text-sm md:text-xl font-medium' type='submit'>Sign Up</button>

                </div>
            </form>
            <div className='mt-4'>
                <p className='text-[#8A8FB9] lato-font text-sm leading-5'>Contact Info</p>
                <p className='text-[#8A8FB9] lato-font text-sm leading-5'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
        </div>
    )
}

export default Bio