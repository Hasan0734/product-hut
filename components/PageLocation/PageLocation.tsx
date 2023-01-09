import React from 'react';

const PageLocation = ({  children }:any) => {
    return (
        <section className='bg-[#F6F5FF] py-20'>
            <div className='container px-4 mx-auto'>
                {children}
            </div>
        </section>
    );
};

export default PageLocation;