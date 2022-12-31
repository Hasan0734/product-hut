import React from 'react'

function Footer() {
  return (
      <footer >

          <div className='bg-[#EEEFFB] py-10'>
              <div className='container mx-auto px-4'>
                  <div className='grid grid-cols-12'>
                      <div className='col-span-4'>
                          <h1>Hello</h1>
                      </div>
                      <div className='col-span-8 '>
                          <div className='grid grid-cols-3'>
                              <div>
                                  <h3>Categories</h3>
                              </div>
                              <div>
                                  <h3>Customer Care</h3>
                              </div>
                              <div>
                                  <h3>Pages</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='bg-[#E7E4F8] py-4'>
              
          </div>

    </footer>
  )
}

export default Footer