import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
        <form className='w-[544px] bg-white drop-shadow-[0_0_25px_rgba(0,0,0,0.05)] px-7 sm:px-10 py-5 sm:py-7'>
            <div className='text-center'>
                <h3 className='josefin-font text-3xl leading-9 text-black font-bold'>Login</h3>
                <p className='text-sm text-[#9096B2] lato-font'>Please login using account detail bellow.</p>
            </div>
            <div className='mt-7 mb-4'>
                <div className='mb-4'>
                    <input className='bg-white px-2 py-2 w-full focus:outline-none border border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font' type="text" placeholder='Email Address' />
                </div>
                <div className='mb-2'>
                    <input className='bg-white px-2 py-2 w-full focus:outline-none border border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font' type="text" placeholder='Password' />
                </div>
                <Link href="/forgate-pass" legacyBehavior>
                    <a className='lato-font text-sm font-normal text-[#9096B2]'>Forgot your password?</a>
                </Link>
                <div className='mt-3'>
                    <button className='bg-[#FB2E86] py-2 w-full text-white text-sm lato-font rounded'>Sign in</button>
                </div>
                <p className='text-center lato-font text-sm font-normal text-[#9096B2] mt-3'>
                    <span>Don’t have an Account?</span> {" "}
                    <Link href="/signup" legacyBehavior>
                        <a className=''>Create account</a>
                    </Link>
                </p>

            </div>
        </form>
    );
};

export default LoginForm;