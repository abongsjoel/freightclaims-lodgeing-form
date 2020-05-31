import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';
import InputRadio from '../../Atoms/InputElements/InputRadio';

const LandingScreen = () => (
    <div className="w-full h-screen flex justify-center items-center">
        <Card>
            <FormElementTitle required={true}>I am a ?</FormElementTitle>
            <div className="mb-10">
                <InputRadio type="radio" id="carrier" name="clientType" value="carrier" label="Carrier" />
                <InputRadio type="radio" id="claimant" name="clientType" value="claimant" label="Claimant"/>
            </div>
        </Card>
    </div>  
);

export default LandingScreen;