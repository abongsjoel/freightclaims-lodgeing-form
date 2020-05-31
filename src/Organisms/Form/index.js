import React from 'react';

import Aux from '../../HOC/Auxilary';
import LandingScreen from './landing-screen';
import Screen1 from './Screen1';

const Form = () => {
    return (
        <Aux>
            <LandingScreen />
            <Screen1 />
        </Aux>  
    );
}

export default Form;