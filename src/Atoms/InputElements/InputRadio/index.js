import React from 'react';

const InputRadio = ({type, id, name, value, label}) => (
    <div className="input flex items-center">
        <input type={type} id={id} name={name} value={value} />
        <label htmlFor={id} className="ml-3 text-sm text-neutral-900 font-medium">{label}</label>
    </div>
);

export default InputRadio;