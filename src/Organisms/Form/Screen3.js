import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import Screens from './Screens';

const Screen3 = ({previous, next, dotClicked}) => (
    <Screens 
        number = "3"
        title="What is your company name ?"
        required={true}
        previous={previous}
        next= {next}
        dotClicked={dotClicked}
    >
        <InputText instruction="Enter your company name here" />
    </Screens>
);

export default Screen3;