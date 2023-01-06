import Image from 'next/image';
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
interface itemProps {
    item: {
        discount: number,
        title: string,
        company: string,
        description: string,
        features: string[],
        link: string,
        image: string
    },
    selected:string
}

const DiscountItem = ({ item, selected }: itemProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '>
            <div className='order-2 lg:order-1'>
                <div className='mt-10'>
                    <h3 className='text-[#151875] josefin-font text-3xl font-bold leading-9'>
                        {item.discount}% Discount Of {item.title}
                    </h3>
                    <h5 className='text-[#FB2E86] text-xl leading-8 josefin-font my-2'>{item.company}</h5>
                </div>
                <div className='my-4'>
                    <p className='text-[#B7BACB] font-sm lato-font leading-8'>
                        {item.description}
                    </p>
                    <ul className='grid grid-cols-2 mt-5'>
                        {

                            item.features.map((feature: string, i: number) => <li key={i++} className='text-[#B7BACB] font-sm lato-font leading-8 flex gap-x-2'><CheckIcon color="#000" width={15} /> {feature}</li>)
                        }
                    </ul>
                </div>
                <Link href={item.link} legacyBehavior>
                    <button className='bg-[#FB2E86] px-7 py-[10px] text-white rounded-sm josefin-font text-sm'>Shop Now</button>
                </Link>
            </div>
            <div className='flex justify-center items-center order-1 lg:order-2'>
                <div className='bg-[#FCECF1] w-[300px] relative h-[300px] p-5 rounded-full flex justify-center items-center'>
                    <div className='absolute w-[400px]'>
                        <Image width={400} height={300} src={item.image} alt={selected} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountItem;