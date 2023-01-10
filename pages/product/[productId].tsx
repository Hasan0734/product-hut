import { HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import Rating from '../../components/Filter/Rating';
import Layout from '../../components/Layout/Layout';
import PageLocation from '../../components/PageLocation/PageLocation';

const index = () => {
    const [image, setImage] = useState("/assets/product/Rectangle 138.png")
    return (
        <Layout>

            <PageLocation  >
                <div>
                    <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                        Product Details
                    </h2>
                    <ul className='flex gap-x-2'>
                        <li className='text-black text-sm '>
                            Home &gt;
                        </li >
                        <li className='text-black text-sm '>
                            Pages &gt;
                        </li>
                        <li className='text-pink-600 text-sm '>
                            Product Details
                        </li>
                    </ul>
                </div>
            </PageLocation>

            <main>
                <section className='py-10 bg-white'>
                    <div className='container px-4 mx-auto'>
                        <div className='rounded-sm drop-shadow-[0_0_25px_10px_rgba(0,0,0,0.05)] p-4'>
                            <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
                                <div className='flex flex-col md:flex-row gap-3'>
                                    <div className='h-full md:h-[450px] bg-pink-100 w-full 
                                    md:w-[220px] overflow-y-scroll md:overflow-y-scroll 
                                     overflow-x-hidden md:overflow-x-scroll  scrollbar-thin scrollbar-track-[#cfc1ff76]
                                      scrollbar-thumb-[#fe78e188] scrollbar-rounded-md
                                    '>

                                        <div className='flex  md:flex-col flex-row w-full overflow-y-scroll md:overflow-y-auto'>
                                            <div className='min-w-[210px] max-w-[210px] h-[210px] p-3 flex-shrink-2'>
                                                <img onClick={() => setImage("/assets/product/Rectangle 134.png")} className='w-full h-full rounded-md' src="/assets/product/Rectangle 134.png" alt="product images" />
                                            </div>
                                            <div className='min-w-[210px] max-w-[210px] h-[210px] p-3 flex-shrink-2'>
                                                <img onClick={() => setImage("/assets/product/Rectangle 136.png")} className='w-full h-full rounded-md' src="/assets/product/Rectangle 136.png" alt="product images" />
                                            </div>
                                            <div className='min-w-[210px] max-w-[210px] h-[210px] p-3 flex-shrink-2'>
                                                <img onClick={() => setImage("/assets/product/Rectangle 137.png")} className='w-full h-full rounded-md' src="/assets/product/Rectangle 137.png" alt="product images" />
                                            </div>
                                         
                                        </div>


                                    </div>
                                    <div className='h-[350px] md:h-[450px] w-full sm:w-[320px]'>
                                        <img className='w-full h-full' src={image} alt="product images" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-3xl font-semibold josefin-font text-[#0D134E] leading-9'>Playwood arm chair</h2>
                                    <div className='flex '>
                                        <Rating rating={4} />
                                        <span className='ml-2 josefin-font text-sm text-black'>(221)</span>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className='text-[#151875] text-sm font-semibold josefin-font'>$25.00</span>
                                        <span className='text-[#FB2E86] josefin-font text-sm font-semibold line-through'>$25.00</span>
                                    </div>
                                    <div>
                                        <h4 className='text-[#151875] text-sm font-semibold josefin-font'>Color</h4>
                                        <p className='text-sm max-w-md'>Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Maiores sapiente dicta unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptas? </p>
                                    </div>
                                    <div className='flex items-center gap-4 my-4'>
                                        <button className='px-4 py-1 rounded-md text-[#151875] bg-gray-50'>Add To Cart </button>
                                        <button className='px-2 py-1 bg-gray-200 rounded-md'>
                                            <HeartIcon width={20} />
                                        </button>
                                    </div>
                                    <div className='my-2'>
                                        <h4 className='text-[#151875] text-[16px] font-semibold josefin-font'>Categories:</h4>
                                    </div>
                                    <div className='my-2'>
                                        <h4 className='text-[#151875] text-[16px] font-semibold josefin-font'>Tags</h4>
                                    </div>
                                    <div className='my-2 flex items-center gap-4'>
                                        <h4 className='text-[#151875] text-[16px] font-semibold josefin-font'>Share</h4>
                                        <div>
                                            <ul className='flex gap-x-3 mt-3 sm:mt-0'>
                                                <li>
                                                    <Link href={"https://facebook.com"} legacyBehavior>
                                                        <a className="bg-[#151875] p-[6px] inline-block rounded-full">
                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.82014 10.9791V6.7352H9.25186L9.46467 5.07358H7.82014V4.0152C7.82014 3.53571 7.95373 3.20743 8.64189 3.20743H9.51386V1.726C9.0896 1.68054 8.66314 1.65858 8.23645 1.66024C6.97095 1.66024 6.10208 2.4328 6.10208 3.85105V5.07047H4.67969V6.73209H6.10519V10.9791H7.82014Z" fill="white" />
                                                            </svg>

                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"https://facebook.com"} legacyBehavior>
                                                        <a className="bg-[#151875] p-[6px] inline-block rounded-full">
                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.2444 4.40715C11.2392 4.01499 11.1658 3.62671 11.0275 3.25971C10.9075 2.95015 10.7243 2.669 10.4896 2.43425C10.2548 2.1995 9.97369 2.01629 9.66413 1.89635C9.30184 1.76035 8.9191 1.68681 8.53222 1.67887C8.03409 1.6566 7.87616 1.65039 6.6117 1.65039C5.34723 1.65039 5.18516 1.65039 4.69066 1.67887C4.30395 1.68687 3.92139 1.76041 3.55927 1.89635C3.24966 2.01621 2.96847 2.19938 2.73371 2.43415C2.49895 2.66891 2.31577 2.9501 2.19591 3.25971C2.05964 3.62172 1.98626 4.00436 1.97895 4.3911C1.95668 4.88974 1.94995 5.04767 1.94995 6.31214C1.94995 7.5766 1.94995 7.73816 1.97895 8.23317C1.98671 8.62049 2.05972 9.00262 2.19591 9.3656C2.31597 9.67512 2.49928 9.95619 2.73413 10.1909C2.96897 10.4255 3.25018 10.6086 3.55979 10.7284C3.92092 10.8699 4.30354 10.9487 4.69118 10.9615C5.18982 10.9837 5.34775 10.9905 6.61222 10.9905C7.87668 10.9905 8.03875 10.9905 8.53325 10.9615C8.92013 10.9538 9.30289 10.8805 9.66516 10.7445C9.97465 10.6244 10.2557 10.4412 10.4905 10.2064C10.7252 9.97169 10.9084 9.69062 11.0285 9.38113C11.1647 9.01867 11.2377 8.63654 11.2455 8.24871C11.2677 7.75058 11.2745 7.59266 11.2745 6.32767C11.2734 5.06321 11.2734 4.90269 11.2444 4.40715ZM6.60859 8.70333C5.28613 8.70333 4.21481 7.63201 4.21481 6.30955C4.21481 4.98709 5.28613 3.91576 6.60859 3.91576C7.24346 3.91576 7.85233 4.16796 8.30125 4.61689C8.75018 5.06581 9.00238 5.67468 9.00238 6.30955C9.00238 6.94442 8.75018 7.55329 8.30125 8.00221C7.85233 8.45113 7.24346 8.70333 6.60859 8.70333ZM9.09765 4.38541C8.78853 4.38541 8.53947 4.13583 8.53947 3.82722C8.53947 3.75395 8.5539 3.6814 8.58193 3.61371C8.60997 3.54602 8.65107 3.48451 8.70288 3.4327C8.75469 3.3809 8.81619 3.3398 8.88388 3.31176C8.95158 3.28372 9.02413 3.26929 9.09739 3.26929C9.17066 3.26929 9.24321 3.28372 9.3109 3.31176C9.3786 3.3398 9.4401 3.3809 9.49191 3.4327C9.54372 3.48451 9.58481 3.54602 9.61285 3.61371C9.64089 3.6814 9.65532 3.75395 9.65532 3.82722C9.65532 4.13583 9.40574 4.38541 9.09765 4.38541Z" fill="white" />
                                                                <path d="M6.60866 7.8643C7.46744 7.8643 8.16361 7.16812 8.16361 6.30935C8.16361 5.45057 7.46744 4.75439 6.60866 4.75439C5.74989 4.75439 5.05371 5.45057 5.05371 6.30935C5.05371 7.16812 5.74989 7.8643 6.60866 7.8643Z" fill="white" />
                                                            </svg>


                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"https://facebook.com"} legacyBehavior>
                                                        <a className="bg-[#151875] p-[6px] inline-block rounded-full">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.932 2.66303C12.4996 2.85461 12.0351 2.98406 11.5468 3.04257C12.0507 2.74111 12.4276 2.26664 12.6073 1.70769C12.1339 1.98885 11.6159 2.18675 11.0756 2.2928C10.7123 1.9049 10.2311 1.64779 9.70675 1.5614C9.18236 1.475 8.64411 1.56415 8.17557 1.815C7.70704 2.06586 7.33443 2.46438 7.1156 2.9487C6.89676 3.43302 6.84395 3.97604 6.96535 4.49345C6.00623 4.44529 5.06795 4.196 4.2114 3.76175C3.35485 3.3275 2.59919 2.718 1.99345 1.9728C1.78633 2.33008 1.66723 2.74432 1.66723 3.18549C1.667 3.58264 1.7648 3.9737 1.95196 4.32399C2.13912 4.67428 2.40984 4.97295 2.74011 5.19351C2.35708 5.18133 1.98251 5.07783 1.64756 4.89164V4.9227C1.64752 5.47972 1.84019 6.0196 2.19289 6.45073C2.54559 6.88186 3.03659 7.17768 3.58257 7.28801C3.22725 7.38417 2.85472 7.39834 2.49312 7.32944C2.64717 7.80872 2.94723 8.22783 3.35131 8.5281C3.75538 8.82837 4.24324 8.99477 4.74658 9.004C3.89213 9.67476 2.83688 10.0386 1.7506 10.037C1.55817 10.0371 1.36591 10.0258 1.1748 10.0034C2.27745 10.7123 3.561 11.0886 4.87189 11.0871C9.30943 11.0871 11.7353 7.41177 11.7353 4.22419C11.7353 4.12063 11.7327 4.01604 11.7281 3.91248C12.1999 3.57123 12.6072 3.14867 12.9309 2.66458L12.932 2.66303Z" fill="white" />
                                                            </svg>


                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>z
                <section className='py-10 bg-[#F9F8FE]'>

                </section>
                <section className='py-10 bg-white'>

                </section>
            </main>
        </Layout>
    );
};

export default index;