import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen1 = ({previous, next}) => (
    <FormScreens 
        number = "1"
        title="What is your name ?"
        required={true}
        previous={previous}
        next={next}
    >
        <InputText instruction="Enter your name here" />
    </FormScreens>
);

export default Screen1;
