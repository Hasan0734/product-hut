import React from 'react';
import RelatedPCard from '../Cards/RelatedPCard';

const products = [
    { id: 1, name: "Mens Fashion Wear", price: 25, rating: 4, image: "/assets/related-product/p1.png" },
    { id: 1, name: "Women’s Fashion", price: 42, rating: 5, image: "/assets/related-product/p2.png" },
    { id: 1, name: "Wolx Dummy Fashion", price: 33, rating: 3, image: "/assets/related-product/p3.png" },
    { id: 1, name: "Top Wall Digital Clock", price: 35, rating: 4, image: "/assets/related-product/p4.png" },
]

const RelatedProduct = () => {
    return (
        <section className='py-20 bg-white'>
            <div className='container px-4 mx-auto'>
                <div>
                    <h2 className='text-xl text-[#101750] font-bold leading-7 josefin-font'>Related Product</h2>
                    <div className='py-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {products.map((product: any) => <RelatedPCard key={product.id} product={product} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default RelatedProduct;