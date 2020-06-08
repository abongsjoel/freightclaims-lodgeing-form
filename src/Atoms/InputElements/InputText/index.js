import React from 'react';

const InputText = ({instruction, type, initialValue, textChanged}) => {
    // const [fullName, setFullName] = useState('');

    // const nameChangedHandler = (event) => {
    //   setFullName(event.target.value);
    // }

    return (
        <div>
            <input 
                type={type} 
                className="input" 
                defaultValue={initialValue}
                onChange={event => textChanged(event)} 
            />
            <p className="text-xs text-neutral-900 font-light -mt-3">{instruction}</p>
        </div>
    );
}

export default InputText;