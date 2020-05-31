import React from 'react';

const InputText = ({instruction}) => (
    <div>
        <input type="text" className="input" />
        <p className="text-xs text-neutral-900 font-light -mt-3">{instruction}</p>
        
    </div>
);

export default InputText;