import Link from 'next/link';
import React from 'react';
import TrendingPCard from '../Cards/TrendingPCard';


const products = [
    { id: 1, title: "Cantilever chair 1", price: 25, prevPrice: 42, image: "/assets/products/image 32.png" },
    { id: 2, title: "Cantilever chair 2", price: 26, prevPrice: 38, image: "/assets/products/image 1170.png" },
    { id: 3, title: "Cantilever chair 3", price: 24, prevPrice: 45, image: "/assets/products/image 1171.png" },
    { id: 4, title: "Cantilever chair 4", price: 30, prevPrice: 50, image: "/assets/products/box for image.png" },
]
const TrendingProducts = () => {
    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Trending Products</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-8'>
                    {products.map((product: any, i: number) => <TrendingPCard key={product.id} product={product} />)}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-[#FFF6FB] drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)] p-4'>
                        <div>
                            <h2 className='text-[#151875] text-xl font-semibold leading-6'>23% off all products </h2>
                            <Link href="/" legacyBehavior>
                                <a className='text-[#FB2E86] underline underline-offset-2 mt-3 block'>Shop Now</a>
                            </Link>
                        </div>
                        <div className='flex justify-end'>
                            <img className='w-[170px]' src="/assets/products/image 1162.png" alt="product" />
                        </div>
                    </div>
                    <div className='bg-[#EEEFFB] drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)] p-4'>
                        <div>
                            <h2 className='text-[#151875] text-xl font-semibold leading-6'>23% off all products </h2>
                            <Link href="/" legacyBehavior>
                                <a className='text-[#FB2E86] underline underline-offset-2 mt-3 block'>Shop Now</a>
                            </Link>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <img className='w-[200px]' src="/assets/products/image 1161.png" alt="product" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-[#F5F6F8] py-2 px-6 rounded-md'>
                                <img className='w-full' src="/assets/products/image 19.png" alt="product" />
                            </div>
                            <div>
                                <Link href={"/"} legacyBehavior>
                                    <a className='text-[#151875] text-sm font-bold leading-5 hover:underline'>Executive Seat chair</a>
                                </Link>
                                <p className='line-through text-[#151875] text-xs font-bold'>$32.00</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-[#F5F6F8] py-2 px-6 rounded-md'>
                                <img className='w-full' src="/assets/products/image 30.png" alt="product" />
                            </div>
                            <div>
                                <Link href={"/"} legacyBehavior>
                                    <a className='text-[#151875] text-sm font-bold leading-5 hover:underline'>Executive Seat chair</a>
                                </Link>
                                <p className='line-through text-[#151875] text-xs font-bold'>$38.00</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-[#F5F6F8] py-2 px-6 rounded-md'>
                                <img className='w-full' src="/assets/products/image 28.png" alt="product" />
                            </div>
                            <div>
                                <Link href={"/"} legacyBehavior>
                                    <a className='text-[#151875] text-sm font-bold leading-5 hover:underline'>Executive Seat chair</a>
                                </Link>
                                <p className='line-through text-[#151875] text-xs font-bold'>$28.00</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;