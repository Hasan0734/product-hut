import React from 'react';
import CartItem from './CartItem';


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
]

const CartItems = () => {
    return (
        <table className='min-w-[600px] md:w-full'>
            <thead>
                <tr>
                    <th className='josefin-font text-xl font-bold text-[#1D3178]  pb-6 text-start max-w-xs'>Product</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-start '>Price</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Quantity</th>
                    <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Total</th>
                </tr>
            </thead>
            <tbody className="">
                {products.map((pd, i) => <CartItem key={pd.id} product={pd} />)}
            </tbody>
        </table>
    );
};

export default CartItems;