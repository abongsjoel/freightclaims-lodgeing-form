import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen3 = () => (
    <FormScreens 
        number = "3"
        title="What is your company name ?"
        required={true}
    >
        <InputText instruction="Enter your company name here" />
    </FormScreens>
);

export default Screen3;