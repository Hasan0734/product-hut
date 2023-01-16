import React from 'react';

const Cart = () => {
    return (
        <div className=''>
            <div className=''>
                <h2 className='josefin-font text-xl font-bold text-[#1D3178] text-center'>Cart Totals</h2>
                <div className='bg-[#F4F4FC] p-8 mt-4'>
                    <div className='flex justify-between items-center border-b-2 pb-2'>
                        <h3 className='lato-font text-xl font-bold text-[#1D3178] leading-9'>Subtotals: </h3>
                        <h3 className='lato-font font-normal text-[18px] text-[#15245E]'>$219.00</h3>
                    </div>
                    <div className='flex justify-between items-center border-b-2 pb-2 pt-5'>
                        <h3 className='lato-font text-xl font-bold text-[#1D3178] leading-9'>Total: </h3>
                        <h3 className='lato-font font-normal text-[18px] text-[#15245E]'>$219.00</h3>
                    </div>
                    <div className='flex items-center gap-2 my-8'>
                        <input className="checkbox checkbox-xs checkbox-success rounded-sm bg-[#E5E0FC]" type="checkbox" id='aggreeCheckout' name="aggreeCheckout" />
                        <label className="text-sm" htmlFor="aggreeCheckout">Shipping & taxes calculated at checkout</label>
                    </div>
                    <button className='bg-[#19D16F] w-full py-2 rounded-sm text-white font-semibold text-xs lato-font'>Procced To Checkout</button>
                </div>
            </div>
            <div className='mt-4'>
                <h2 className='josefin-font text-xl font-bold text-[#1D3178] text-center'>Calculate Shopping</h2>
                <div className='bg-[#F4F4FC] p-8 mt-4'>
                    <div>
                        <input className='w-full bg-[#F4F4FC] border-b-2 py-1 my-2 text-sm focus:outline-none' type="text" placeholder="Country" />
                        <input className='w-full bg-[#F4F4FC] border-b-2 py-1 my-3 text-sm focus:outline-none' type="text" placeholder="Address" />
                        <input className='w-full bg-[#F4F4FC] border-b-2 py-1 my-4 text-sm focus:outline-none' type="text" placeholder="Post Code" />
                    </div>
                    <button className="bg-[#FB2E86] px-4 py-2 text-white rounded text-sm mt-4">Calculate Shiping</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;