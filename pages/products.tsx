import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

import ProductGridCard from '../components/Cards/ProductGridCard';
import PageLocation from '../components/PageLocation/PageLocation';
import ProductViewType from '../components/ProductViewType/ProductViewType';
import ProductRowCard from '../components/Cards/ProductRowCard';
import Filter from '../components/Filter/Filter';

const products = [
    {
        id: 1,
        name: "Vel elit euismod",
        price: 26,
        prevPrice: 42,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image 9.png"
    },
    {
        id: 2,
        name: "Ultricies condimentum imperdiet",
        price: 20,
        prevPrice: 38,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image 1165.png"
    },
    {
        id: 3,
        name: "Vitae suspendisse sed",
        price: 24,
        prevPrice: 45,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image 9.png"
    },
    {
        id: 4,
        name: "Sed at fermentum",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/10011 1.png"
    },
    {
        id: 5,
        name: "Fusce pellentesque at",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/unnamed 1.png"
    },
    {
        id: 6,
        name: "Vestibulum magna laoreet",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/4.png"
    },
    {
        id: 7,
        name: "Sollicitudin amet orci",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/purepng 1.png"
    },
    {
        id: 8,
        name: "Ultrices mauris sit",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image 1164.png"
    },
    {
        id: 9,
        name: "Pellentesque condimentum ac",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/1.png"
    },
    {
        id: 10,
        name: "Cras scelerisque velit",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/cam 2.png"
    },
    {
        id: 11,
        name: "Lectus vulputate faucibus",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/3.png"
    },
    {
        id: 12,
        name: "Purus risus, ut",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/10011 1.png"
    },
    {
        id: 13,
        name: "Accumsan tincidunt",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image1 (1).png"
    },
    {
        id: 14,
        name: "Accumsan tincidunt",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image1 (2).png"
    },
    {
        id: 15,
        name: "Accumsan tincidunt",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image1 (3).png"
    },
    {
        id: 16,
        name: "Accumsan tincidunt",
        price: 30,
        prevPrice: 50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: "/assets/products/image1 (4).png"
    },

]

const Products = () => {

    const [layout, setLayout] = useState("list");
    const [toggle, setToggle] = useState(false)

    return (
        <Layout>

            <PageLocation />

            <section className='py-20'>
                <div className='container px-4 mx-auto relative bg-white'>

                    <ProductViewType toggle={toggle} setToggle={setToggle} layout={layout} setLayout={setLayout} />

                    <div className='block lg:flex gap-5'>
                        <div
                            className={`${toggle ? " hidden lg:block " : " hidden "} bg-white py-5 sticky top-24 z-20 h-screen  scrollbar-thin  scrollbar-hide scrollbar-rounded-lg scrollbar-thumb-blue-100 scrollbar-track-gray-100 w-[300px]`}>
                            <Filter />
                        </div>

                        <div className={`grid ${layout === "grid" ? `grid-cols-1 md:grid-cols-2 ${toggle ? "lg:grid-cols-3" : "lg:grid-cols-4"}` : "grid-cols-1"} gap-6 static`}>
                            {
                                layout === "grid" && products.map((product) => <ProductGridCard key={product.id} product={product} />)
                            }
                            {
                                layout === "list" && products.map((product) => <ProductRowCard key={product.id} product={product} />)
                            }

                        </div>
                    </div>

                </div>
            </section>

        </Layout>
    );
};

export default Products;