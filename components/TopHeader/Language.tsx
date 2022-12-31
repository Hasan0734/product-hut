
import React from 'react'
import SelectOption from './SelectOption'


const languages = [
    { id: 1, name: 'English', unavailable: false },
    { id: 2, name: 'Bangla', unavailable: false },
    { id: 3, name: 'Hindi', unavailable: false },
    { id: 4, name: 'Urdo', unavailable: true },
]

function Language() {

  return (
      <>
          <div className='hidden sm:block'>
              <SelectOption options={languages} />
          </div>   
    </>
  )
}

export default Language