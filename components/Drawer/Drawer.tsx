import React from 'react'
import NavItems from '../Navbar/NavItems'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Drawer({ children }: any) {

    return (
        <div className="drawer bg-white">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {children}
            </div>
            <div className="drawer-side block lg:hidden">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

                <div className='bg-white p-4 w-80 block lg:hidden menu'>
                    <div className="flex justify-end">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <XMarkIcon width={25}/>
                        </label>
                    </div>
                    <NavItems />
                </div>

            </div>
        </div>
    )
}

export default Drawer