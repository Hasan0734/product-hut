import React from 'react'
import Bio from './Bio'
import BottomFooter from './BottomFooter';
import Categories from './Categories';
import CustomerCare from './CustomerCare';
import Pages from './Pages';



function Footer() {
    return (
        <footer >

            <div className='bg-[#EEEFFB] py-10'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-12 gap-y-5 gap-x-5'>

                        <Bio />

                        <div className='col-span-12 lg:col-span-8'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                <Categories />
                                <CustomerCare />
                                <Pages />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomFooter />

        </footer>
    )
}

export default Footer