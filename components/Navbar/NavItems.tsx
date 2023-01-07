import Link from 'next/link'
import React from 'react'


const items = [

  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Pages", url: "/pages" },
  { id: 3, title: "Products", url: "/products" },
  { id: 4, title: "Blogs", url: "/blogs" },
  { id: 5, title: "Shops", url: "/shops" },
  { id: 6, title: "Contact", url: "/contact-us" },
]

function NavItems() {
  return (
    <>
      <ul className='flex flex-col lg:flex-row gap-x-5 xl:gap-x-10 lg:items-center'>
        {
          items.map((item: any) => <li key={item.id}>
            <Link href={item.url} legacyBehavior>
              <a className='font-normal text-[#0D0E43] lato-font text-[16px] leading-5'>{item.title}</a>
            </Link>
          </li>)
        }

      </ul>
    </>
  )
}

export default NavItems