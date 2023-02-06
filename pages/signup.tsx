import React from 'react';
import SignupForm from '../components/Forms/SignupForm';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';

const Register = () => {
    return (
        <Layout>
            <PageLocation  >
                <div>
                    <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                        Create a new Account
                    </h2>
                    <ul className='flex gap-x-2'>
                        <li className='text-black text-sm '>
                            Home &gt;
                        </li >
                        <li className='text-black text-sm '>
                            Pages &gt;
                        </li>
                        <li className='text-pink-600 text-sm '>
                            My Account
                        </li>
                    </ul>
                </div>
            </PageLocation>

            <section className='py-20 lg:py-40 bg-white'>
                <div className='container mx-auto px-4 flex justify-center items-center'>
                    <SignupForm />
                </div>
            </section>


        </Layout>
    );
};

export default Register;