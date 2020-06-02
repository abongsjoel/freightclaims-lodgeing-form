import React from 'react';

import InputRadio from '../../Atoms/InputElements/InputRadio';
import FormScreens from './FormScreens';

const Screen4 = ({previous, next, dotClicked, freightType, initialValue}) => (
    <FormScreens 
        number = "4"
        title="Type of freight ?"
        required={true}
        previous={previous}
        next= {next}
        dotClicked={dotClicked}
    >
        <InputRadio id="air" name="freightType" value="air" initialValue={initialValue} label="Air Freight" inputChanged={freightType} />
        <InputRadio id="sea" name="freightType" value="sea" initialValue={initialValue} label="Sea Freight" inputChanged={freightType} />
        <InputRadio id="land" name="freightType" value="land" initialValue={initialValue} label="Land Freight" inputChanged={freightType} />
    </FormScreens>
);

export default Screen4;