import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


function SearchBox() {
  return (
      <div className='hidden lg:block'>
          <div className='flex'>
              <input className='border-gray-400 border bg-white rounded-l-md px-2 py-1 lg:w-[320px] focus:outline-pink-600 focus:outline focus:outline-1' type="text" />
              <button className='bg-[#FB2E86] px-3 py-1 rounded-r-md'><MagnifyingGlassIcon width={20} color="#fff" /></button>
          </div>
      </div>
  )
}

export default SearchBox