import React from 'react';

import InputRadio from '../../Atoms/InputElements/InputRadio';
import FormScreens from './FormScreens';

const Screen4 = ({previous, next, dotClicked}) => (
    <FormScreens 
        number = "4"
        title="Type of freight ?"
        required={true}
        previous={previous}
        next= {next}
        dotClicked={dotClicked}
    >
        <InputRadio type="radio" id="air" name="freightType" value="air" label="Air Freight" />
        <InputRadio type="radio" id="sea" name="freightType" value="sea" label="Sea Freight" />
        <InputRadio type="radio" id="land" name="freightType" value="land" label="Land Freight" />
    </FormScreens>
);

export default Screen4;