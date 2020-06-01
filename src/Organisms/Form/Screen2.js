import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import FormScreens from './FormScreens';

const Screen2 = ({previous, next, dotClicked}) => (
    <FormScreens 
        number = "2"
        title="What is your email ?"
        required={true}
        previous={previous}
        next={next}
        dotClicked={dotClicked} 
    >
        <InputText instruction="Enter your email address here" />
    </FormScreens>
);

export default Screen2;