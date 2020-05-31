import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';
import InputText from '../../Atoms/InputElements/InputText';

const Screen1 = () => (
    <div className="cardPositioning">
        <Card>
            <FormElementTitle required={true}>What is your name ?</FormElementTitle>
            <div className="mb-10">
                <InputText instruction="Enter your name here" />
            </div>
        </Card>
    </div>  
);

export default Screen1;
