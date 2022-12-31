
import React from 'react'
import SelectOption from './SelectOption';


const currencies = [
    { id: 1, name: 'USD', unavailable: false },
    { id: 2, name: 'BDT', unavailable: false },
]

function Currency() {

    return (
        <>

            <div className='hidden sm:block'>
                <SelectOption options={currencies} />
            </div>

        </>
    )
}

export default Currency