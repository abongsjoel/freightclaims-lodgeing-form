import React from 'react';

import InputRadio from '../../Atoms/InputElements/InputRadio';

import Screens from './Screens';

const LandingScreen = ({next, hidePrevious, clientType}) => (
    <div className="cardPositioning">
        <Screens title="I am a ?" required="true" next={next} hidePrevious={hidePrevious}>
            <InputRadio id="carrier" name="clientType" value="carrier" label="Carrier" inputChanged={clientType}/>
            <InputRadio id="claimant" name="clientType" value="claimant" label="Claimant" inputChanged={clientType}/>
        </Screens>
    </div>
);

export default LandingScreen;  