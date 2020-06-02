import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import Screens from './Screens';

const Screen1 = ({previous, next, number, dotClicked, fullNames, initialValue}) => (
    <Screens 
        number = {number}
        title="What is your name ?"
        required={true}
        previous={previous}
        next={next}
        dotClicked={dotClicked} 
    >  
        <InputText textChanged={fullNames} initialValue={initialValue} instruction="Enter your name here" />
    </Screens>  
);

export default Screen1;
  