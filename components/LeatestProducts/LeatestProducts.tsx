import React, { useState } from 'react';
import LeatestPCard from '../Cards/LeatestPCard';

const items = [
    { id: 1, title: "New Arrival", slug: "new_arrival" },
    { id: 2, title: "Best Seller", slug: "best_seller" },
    { id: 3, title: "Featured", slug: "featured" },
    { id: 4, title: "Special Offer", slug: "special_offer" },
]

const products = [
    {
        id: 1,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 32.png"
    },
    {
        id: 2,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 15.png"
    },
    {
        id: 3,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 1168.png"
    },
    {
        id: 4,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 23.png"
    },
    {
        id: 5,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 32.png"
    },
    {
        id: 6,
        title: "Comfort Handy Craft",
        price: 25,
        prevPrice: 42,
        image: "/assets/products/image 3.png"
    },

]

const LeatestProducts = () => {
    const [selectedItem, setSelectedItem] = useState("new_arrival")
    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Leatest Products</h2>
                </div>
                <div className='flex justify-center my-4'>
                    <ul className='flex gap-5'>
                        {items.map((item: any) => <li
                            onClick={() => setSelectedItem(item.slug)}
                            key={item.id}
                            className={`${selectedItem === item.slug ? "text-[#FB2E86] underline" : " text-[#151875]"} cursor-pointer text-sm font-normal hover:underline leading-6`}>
                            {item.title}
                        </li>)}
                    </ul>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6'>
                    {products.map((product: any) => <LeatestPCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    );
};

export default LeatestProducts;