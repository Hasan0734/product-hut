import React from 'react';
import ShopexOfferCard from '../Cards/ShopexOfferCard';

const offers = [
    {
        id: 1,
        title: "Free Delivery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/assets/icons/free-delivery.png"
    },

    {
        id: 2,
        title: "Cashback Policy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/assets/icons/cashback.png"
    },
    {
        id: 3,
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/assets/icons/support.png"
    },
    {
        id: 4,
        title: "Premium Quality",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/assets/icons/premium-quality.png"
    },
]

const ShopexOffer = () => {
    return (
        <section className='py-10'>
            <div className='container px-4 mx-auto'>
                {/* section title */}
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>What Shopex Offer!</h2>
                </div>


                <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 my-10'>
                    {offers.map((offer: any, i: number) => <ShopexOfferCard key={offer.id} item={offer} />)}
                </div>
            </div>
        </section>
    );
};

export default ShopexOffer;