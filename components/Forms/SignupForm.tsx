import Link from 'next/link';
import React from 'react';
import InputText from './InputText';

const SignupForm = () => {
    return (
        <form className='w-[544px] bg-white drop-shadow-[0_0_25px_rgba(0,0,0,0.05)] px-7 sm:px-10 py-5 sm:py-7'>
            <div className='text-center'>
                <h3 className='josefin-font text-3xl leading-9 text-black font-bold'>Sign up</h3>
                <p className='text-sm text-[#9096B2] lato-font'>Please create an new account and get access more.</p>
            </div>
            <div className='mt-7 mb-4'>
                <div className='md:flex gap-3'>
                    <InputText
                        name='firstName'
                        id='firstName'
                        type='text'
                        placeholder='First Name'
                        style={"mb-2 focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}

                    />
                    <InputText
                        name='lastName'
                        id='lastName'
                        type='text'
                        placeholder='Last Name'
                        style={"mb-2 focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}

                    />
                </div>
                <div className='flex gap-3 items-center  mb-2'>
                    <select className='px-2  py-2 bg-white border border-[#C2C5E1] rounded' name="" id="">
                        <option value="">+880</option>
                        <option value="">+18</option>
                        <option value="">+565</option>
                    </select>
                    <InputText
                        name='phone'
                        id='phone'
                        type='text'
                        placeholder='Phone'
                        style={"focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}

                    />
                </div>
                <InputText
                    name='email'
                    id='email'
                    type='text'
                    placeholder='Enter email'
                    style={"mb-2 focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}

                />
                <InputText
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    style={"mb-2 focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}

                />
                <InputText
                    name='con_password'
                    id='con_password'
                    type='password'
                    placeholder='Confirm Password'
                    style={"mb-2 focus:outline-none  border-[#C2C5E1] rounded text-[#9096B2] text-sm lato-font"}
                />




                <Link href="/forgate-pass" legacyBehavior>
                    <a className='lato-font text-sm font-normal text-[#9096B2]'>Forgot your password?</a>
                </Link>
                <div className='mt-3'>
                    <button className='bg-[#FB2E86] py-2 w-full text-white text-sm lato-font rounded'>Sign up</button>
                </div>
                <p className='text-center lato-font text-sm font-normal text-[#9096B2] mt-3'>
                    <span>Already have a account?</span> {" "}
                    <Link href="/login" legacyBehavior>
                        <a className=''>Login</a>
                    </Link>
                </p>

            </div>
        </form>
    );
};

export default SignupForm;