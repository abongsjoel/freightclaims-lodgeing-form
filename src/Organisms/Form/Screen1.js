import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen1 = ({previous, next, number, dotClicked, fullNames, initialValue}) => (
    <FormScreens 
        number = {number}
        title="What is your name ?"
        required={true}
        previous={previous}
        next={next}
        dotClicked={dotClicked} 
    >  
        <InputText textChanged={fullNames} initialValue={initialValue} instruction="Enter your name here" />
    </FormScreens>
);

export default Screen1;
  