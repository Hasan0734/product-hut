import React from 'react'
import { EnvelopeIcon, PhoneIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Language from './Language';
import Currency from './Currency';
import Link from 'next/link';
function TopHeader() {

    return (
        <>
            <div className='bg-[#7E33E0] py-2'>

                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between '>
                        <div className='hidden md:block'>
                            <div className='flex gap-x-6 items-center'>
                                <div className='flex gap-x-3 text-xs'>
                                    <EnvelopeIcon width={15} color="#fff" />
                                    <p className='text-white'> Jahid0734@gmail.com</p>

                                </div>
                                <div className='flex gap-x-3 text-xs'>
                                    <PhoneIcon width={15} color="#fff" />
                                    <p className='text-white'>+8801742782856</p>

                                </div>
                            </div>
                       </div>

                        <div className='flex gap-x-5 items-center'>
                            <Language />
                            <Currency />

                            <ul className='flex gap-x-5 items-center text-sm'>
                                <li>
                                    <Link href="/login" legacyBehavior>
                                        <a className='text-white flex gap-x-1 items-center'> Login <UserIcon width={18} color="#fff"/></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" legacyBehavior>
                                        <a className='text-white  flex gap-x-1 items-center'> Wishlists <HeartIcon width={18} color="#fff"/></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" legacyBehavior>
                                        <a className='text-white  flex gap-x-1 items-center'> <ShoppingCartIcon width={18} color="#fff"/></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader