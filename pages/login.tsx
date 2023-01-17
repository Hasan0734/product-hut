import Link from 'next/link';
import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';

const Login = () => {
    return (
        <Layout>
            <PageLocation  >
                <div>
                    <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                        My Account
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

            <section className='py-40 bg-white'>
                <div className='container mx-auto px-4 flex justify-center items-center'>
                    <LoginForm />
                </div>
            </section>


        </Layout>
    );
};

export default Login;