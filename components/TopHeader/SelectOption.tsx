import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';


function SelectOption({options}:any) {
    const [selectedPerson, setSelectedPerson] = useState(options[0]);

  return (
      <>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <Listbox.Button className="flex gap-x-1 items-center text-white text-sm">{selectedPerson.name} <ChevronDownIcon width={12} color="#fff" /></Listbox.Button>
              <Listbox.Options className="absolute bg-violet-300 border mt-1 z-30 rounded-b-sm">
                  {options.map((option:any) => (
                      <Listbox.Option
                          className="text-gray-800 text-sm cursor-pointer duration-150 hover:bg-violet-600 px-2 py-[2px] hover:text-white"
                          key={option.id}
                          value={option}
                          disabled={option.unavailable}
                      >
                          {option.name}
                      </Listbox.Option>
                  ))}
              </Listbox.Options>
          </Listbox> 
    </>
  )
}

export default SelectOption