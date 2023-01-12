import React from 'react';

const ProductContentItems = ({selectItem, setSelectItem}:any) => {
    return (
        <>
            <div className=''>
                <ul className='flex gap-5'>
                    <li
                        onClick={() => setSelectItem("description")}
                        className={`josefin-font text-xl font-semibold 
                                    ${selectItem === "description" ? "underline" : ""}
                                     text-[#151875] hover:underline underline-offset-2 cursor-pointer`}>
                        Description</li>
                    <li
                        onClick={() => setSelectItem("additional-info")}
                        className={`josefin-font text-xl font-semibold 
                                    ${selectItem === "additional-info" ? "underline" : ""}
                                     text-[#151875] hover:underline underline-offset-2 cursor-pointer`}>
                        Additional Info</li>
                    <li
                        onClick={() => setSelectItem("reviews")}
                        className={`josefin-font text-xl font-semibold 
                                    ${selectItem === "reviews" ? "underline" : ""}
                                     text-[#151875] hover:underline underline-offset-2 cursor-pointer`}>
                        Reviews</li>
                    <li
                        onClick={() => setSelectItem("video")}
                        className={`josefin-font text-xl font-semibold 
                                    ${selectItem === "video" ? "underline" : ""}
                                     text-[#151875] hover:underline underline-offset-2 cursor-pointer`}>
                        Video</li>
                </ul>
            </div>
        </>
    );
};

export default ProductContentItems;