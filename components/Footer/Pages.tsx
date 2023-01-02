import Link from 'next/link'
import React from 'react'

const categories = [
    { id: 1, name: "Blog", url: "/blog" },
    { id: 2, name: "Browse the Shop", url: "/shop" },
    { id: 3, name: "Category", url: "/category" },
    { id: 4, name: "Pre-Built Pages", url: "/pre-built-pages" },
    { id: 5, name: "Visual Composer Elements", url: "/composer-elements" },
    { id: 6, name: "WooCommerce Pages", url: "/wooCommerce" },
]
function Pages() {
    return (
        <div>
            <h3 className='text-[#000000] text-[22px] leading-[6px] font-semibold'>Pages</h3>
            <ul className='mt-8'>
                {categories.map((category) => <li className='my-2' key={category.id}>
                    <Link href={category.url} legacyBehavior>
                        <a className='text-[#8A8FB9] text-[16px] leading-[19px] font-normal lato-font py-2'>{category.name}</a>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Pages