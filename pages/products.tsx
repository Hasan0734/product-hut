import React from 'react';
import Layout from '../components/Layout/Layout';

import ProductCard from '../components/Cards/ProductCard';
import PageLocation from '../components/PageLocation/PageLocation';
import ProductViewType from '../components/ProductViewType/ProductViewType';

const products = [
    {
        id: 1,
        name: "Vel elit euismod",
        price: 26,
        prevPrice: 42,
        image: "/assets/products/image 9.png"
    },
    {
        id: 2,
        name: "Ultricies condimentum imperdiet",
        price: 20,
        prevPrice: 38,
        image: "/assets/products/image 1165.png"
    },
    {
        id: 3,
        name: "Vitae suspendisse sed",
        price: 24,
        prevPrice: 45,
        image: "/assets/products/image 9.png"
    },
    {
        id: 4,
        name: "Sed at fermentum",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/10011 1.png"
    },
    {
        id: 5,
        name: "Fusce pellentesque at",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/unnamed 1.png"
    },
    {
        id: 6,
        name: "Vestibulum magna laoreet",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/4.png"
    },
    {
        id: 7,
        name: "Sollicitudin amet orci",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/purepng 1.png"
    },
    {
        id: 8,
        name: "Ultrices mauris sit",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/image 1164.png"
    },
    {
        id: 9,
        name: "Pellentesque condimentum ac",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/1.png"
    },
    {
        id: 10,
        name: "Cras scelerisque velit",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/cam 2.png"
    },
    {
        id: 11,
        name: "Lectus vulputate faucibus",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/3.png"
    },
    {
        id: 12,
        name: "Purus risus, ut",
        price: 30,
        prevPrice: 50,
        image: "/assets/products/10011 1.png"
    },

]

const Products = () => {
    return (
        <Layout>

            <PageLocation />

            <section className='py-20'>
                <div className='container px-4 mx-auto'>

                    <ProductViewType />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            products.map((product) => <ProductCard key={product.id} product={product} />)
                        }

                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Products;