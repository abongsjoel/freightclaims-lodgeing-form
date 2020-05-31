import React from 'react';

const InputText = ({instruction, type}) => (
    <div>
        <input type={type} className="input" />
        <p className="text-xs text-neutral-900 font-light -mt-3">{instruction}</p>
        
    </div>
);

export default InputText;