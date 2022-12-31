import Link from 'next/link'
import React from 'react'


const items = [

  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Pages", url: "/" },
  { id: 3, title: "Products", url: "/" },
  { id: 4, title: "Blog", url: "/" },
  { id: 5, title: "Shop", url: "/" },
  { id: 6, title: "Contact", url: "/" },
]

function NavItems() {
  return (
    <div className='hidden md:block'>
      <ul className='flex gap-x-10 items-center'>
        {
          items.map((item: any) => <li key={item.id}>
            <Link href={item.url} legacyBehavior>
              <a className='font-normal text-[#0D0E43] lato-font text-[16px] leading-5'>{item.title}</a>
            </Link>
          </li>)
        }

      </ul>
    </div>
  )
}

export default NavItems