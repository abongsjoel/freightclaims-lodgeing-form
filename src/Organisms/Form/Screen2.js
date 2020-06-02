import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import Screens from './Screens';

const Screen2 = ({previous, next, dotClicked}) => (
    <Screens 
        number = "2"
        title="What is your email ?"
        required={true}
        previous={previous}
        next={next}
        dotClicked={dotClicked} 
    >
        <InputText instruction="Enter your email address here" />
    </Screens>  
);

export default Screen2;