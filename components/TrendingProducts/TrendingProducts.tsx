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
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-5'>
                    {products.map((product: any, i: number) => <TrendingPCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;