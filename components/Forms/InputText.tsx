import React from 'react';

interface propsType {
    placeholder: string,
    type: string,
    name: string,
    id: string,
    style: string
}

const InputText = ({ placeholder, type, name, id, style,}: propsType) => {
    return (
        <input
            name={name}
            id={id}
            className={`bg-white px-2 py-2 w-full border
             ${style}`}
            type={type}
            placeholder={placeholder} />
    );
};

export default InputText;