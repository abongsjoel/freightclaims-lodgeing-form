import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen1 = () => (
    <FormScreens 
        number = "1"
        title="What is your name ?"
        required={true}
    >
        <InputText instruction="Enter your name here" />
    </FormScreens>
);

export default Screen1;
