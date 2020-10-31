import React from 'react';

import InputText from '../../Atoms/InputElements/InputText';
import Screens from './Screens';

const Screen5 = ({previous, submit, dotClicked, next }) => (
    <Screens 
        number = "5"
        title="Number of freights per month ?"
        required={true}
        previous={previous}
        next= {next}
        dotClicked={dotClicked}
    >
        <InputText instruction="Enter the number of freights per month here" type="number" />
    </Screens>
);

export default Screen5;