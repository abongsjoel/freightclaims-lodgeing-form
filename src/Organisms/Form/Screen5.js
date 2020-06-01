import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen5 = () => (
    <FormScreens 
        number = "5"
        title="Number of freights per month ?"
        required={true}
    >
        <InputText instruction="Enter the number of freights per month here" type="number" />
    </FormScreens>
);

export default Screen5;