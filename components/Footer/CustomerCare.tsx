import Link from 'next/link'
import React from 'react'

const categories = [
    { id: 1, name: "My Account", url: "/" },
    { id: 2, name: "Discount", url: "/" },
    { id: 3, name: "Returns", url: "/" },
    { id: 4, name: "Orders History", url: "/" },
    { id: 5, name: "Order Tracking", url: "/" },
]
function CustomerCare() {
  return (
      <div>
          <h3 className='text-[#000000] text-[22px] leading-[6px] font-semibold'>Customer Care</h3>
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

export default CustomerCare