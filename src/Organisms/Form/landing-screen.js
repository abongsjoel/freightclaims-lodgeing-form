import React from 'react';

import InputRadio from '../../Atoms/InputElements/InputRadio';

import Screens from './Screens';

const LandingScreen = ({next, hidePrevious}) => (
    <div className="cardPositioning">
        <Screens title="I am a ?" required="true" next={next} hidePrevious={hidePrevious}>
            <InputRadio type="radio" id="carrier" name="clientType" value="carrier" label="Carrier" />
            <InputRadio type="radio" id="claimant" name="clientType" value="claimant" label="Claimant"/>
        </Screens>
    </div>
);

export default LandingScreen;