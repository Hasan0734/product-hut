import React, { useState } from 'react';

const colors = [
    { id: 1, name: "Blue", code: "#5E37FF" },
    { id: 2, name: "Orange", code: "#FF9437" },
    { id: 3, name: "Brown", code: "#FFBF95" },
    { id: 4, name: "Green", code: "#33D221" },
    { id: 5, name: "Purple", code: "#E248FF" },
    { id: 6, name: "Sky", code: "#26CBFF" },
]

const ByColor = () => {
    const [selectedColor, setSelectedColor]: any = useState({})
    return (
        <div className='pr-4'>
            <h3 className='underline text-[#151875] text-xl font-bold josefin-font underline-offset-4 leading-10'>Filter By Color</h3>
            <ul className='grid grid-cols-3 gap-2'>
                {colors.map((color: any) => <li onClick={() => setSelectedColor(selectedColor.name === color.name ? "" : color)} key={color.id}
                    className="flex gap-[3px] rounded-lg items-center cursor-pointer px-2 py-2"
                    style={{ background: color.name === selectedColor?.name ? color.code : "" }}
                >
                    <span className={` w-3 h-3 rounded-full`} style={{ background: color.code }}></span>
                    <span className={`text-sm ${selectedColor?.name === color.name ? "text-white": ""}`}>{color.name}</span>
                </li>)}


            </ul>
        </div>
    );
};

export default ByColor;