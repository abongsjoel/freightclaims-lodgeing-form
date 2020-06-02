import React from 'react';

const InputRadio = ({type, id, name, value, initialValue, label, inputChanged}) => (
    <div className="input flex items-center">
        <input 
            type="radio" 
            id={id} name={name} 
            value={value} 
            defaultChecked={initialValue === value } 
            onChange={(event) => inputChanged(event)} 
        />
        <label htmlFor={id} className="ml-3 text-sm text-neutral-900 font-medium">{label}</label>
    </div>
);

export default InputRadio;  