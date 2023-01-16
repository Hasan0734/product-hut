import { useState } from "react";
import Cart from "./Cart";
import CartItems from "./CartItems";


const ShoppingCart = () => {


    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                    <div className='col-span-1  lg:col-span-2'>
                        <div className="overflow-x-scroll md:overflow-auto">
                            <CartItems />
                       </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-[#FB2E86] px-4 py-2 text-white  rounded text-sm">Clear Cart</button>
                        </div>
                    </div>
                    <div className='col-span-1  md:col-span-1'>
                        <Cart />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default ShoppingCart;