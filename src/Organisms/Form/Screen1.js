import React, { useState } from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import Screens from './Screens';

const Screen1 = ({previous, next, number, dotClicked, textChanged, initialValue}) => {

    const [fullName, setFullName] = useState('');

    const nameChangedHandler = (event) => {
      setFullName(event.target.value);
    }

    return (
        <Screens 
            number = {number}
            title="What is your name ?"
            required={true}
            previous={previous}
            next={next}
            dotClicked={dotClicked} 
        >  
            <InputText textChanged={textChanged} initialValue={initialValue} instruction="Enter your name here" />
        </Screens>  
    );
}

export default Screen1;
  