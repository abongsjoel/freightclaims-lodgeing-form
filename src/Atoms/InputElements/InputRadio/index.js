import React from 'react';

const InputRadio = ({type, id, name, value, label}) => (
    <div className="border border-neutral-500 px-2 py-1 my-4 flex items-center">
        <input type={type} id={id} name={name} value={value} />
        <label htmlFor={id} className="ml-3 text-sm text-neutral-900 font-medium">{label}</label>
    </div>
);

export default InputRadio;