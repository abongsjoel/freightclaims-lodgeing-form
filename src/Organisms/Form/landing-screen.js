import React from 'react';

import InputRadio from '../../Atoms/InputElements/InputRadio';

import Aux from '../../HOC/Auxilary';
import Screens from './Screens';

const LandingScreen = () => (
    <Aux>
        <Screens title="I am a ?" required="true">
            <InputRadio type="radio" id="carrier" name="clientType" value="carrier" label="Carrier" />
            <InputRadio type="radio" id="claimant" name="clientType" value="claimant" label="Claimant"/>
        </Screens>
    </Aux>
);

export default LandingScreen;