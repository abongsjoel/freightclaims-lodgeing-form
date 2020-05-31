import React from 'react';

import Aux from '../../HOC/Auxilary';
import LandingScreen from './landing-screen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Form = () => {
    return (
        <Aux>
            {/* <LandingScreen /> */}
            {/* <Screen1 /> */}
            {/* <Screen2 /> */}
            <Screen3 />
        </Aux>  
    );
}

export default Form;