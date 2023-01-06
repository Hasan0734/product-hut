
import React, { useState } from 'react';
import DiscountItem from './DiscountItem';

const woodChair = {
    discount: 20,
    title: "All Products",
    company: "Eams Sofa Compact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    features: ["Material expose like metals", "Clear lines and geomatric figures", "Simple neutral colours.", "Material expose like metals"],
    link: "/",
    image: "/assets/discount/wood-chair.png"
}
const plastic = {
    discount: 30,
    title: "All Products",
    company: "RFL Ltd.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    features: ["Material expose like metals", "Clear lines and geomatric figures", "Simple neutral colours.", "Material expose like metals"],
    link: "/",
    image: "/assets/discount/plastic.png"
}
const sofa = {
    discount: 50,
    title: "All Products",
    company: "Eams Sofa Compact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    features: ["Material expose like metals", "Clear lines and geomatric figures", "Simple neutral colours.", "Material expose like metals"],
    link: "/",
    image: "/assets/discount/sofa.png"
}

const DiscountItems = () => {
    const [selected, setSelected] = useState("woodChair");
    return (
        <section className='py-20'>

            <div className='container px-4 mx-auto'>
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Discount Item</h2>
                </div>
                <div className='flex justify-center'>
                    {/* items */}
                    <ul className='flex gap-x-5'>
                        <li onClick={() => setSelected("woodChair")}
                            className={`${selected === "woodChair" ? "text-[#FB2E86] underline underline-offset-2" :
                                "text-[#151875]"}
                             text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>

                            Wood Chair

                            {/* <span className='w-1 h-1 inline-block rounded-full bg-[#FB2E86] ml-1'></span> */}
                        </li>
                        <li onClick={() => setSelected("plasticChair")}
                            className={`${selected === "plasticChair" ? "text-[#FB2E86] underline underline-offset-2" : "text-[#151875]"} 
                            text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>
                            Plastic Chair

                        </li>
                        <li onClick={() => setSelected("sofa")}
                            className={`${selected === "sofa" ? "text-[#FB2E86] underline underline-offset-2" : "text-[#151875]"}
                             text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>
                            Sofa Collection

                        </li>
                    </ul>
                </div>

                <div className='mt-10'>


                    {selected === "woodChair" && <DiscountItem item={woodChair} selected={selected} />}
                    {selected === "plasticChair" && <DiscountItem item={plastic} selected={selected} />}
                    {selected === "sofa" && <DiscountItem item={sofa} selected={selected} />}

                </div>
            </div>
        </section>
    );
};

export default DiscountItems;