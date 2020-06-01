import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen3 = ({previous, next}) => (
    <FormScreens 
        number = "3"
        title="What is your company name ?"
        required={true}
        previous={previous}
        next= {next}
    >
        <InputText instruction="Enter your company name here" />
    </FormScreens>
);

export default Screen3;