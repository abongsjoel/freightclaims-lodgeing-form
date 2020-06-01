import React from 'react';

// import Aux from '../../HOC/Auxilary';
import LandingScreen from './landing-screen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const Form = () => {

    const [show, setShow] = ('0')

    const previousHandler = () => {
        
    }

    let displayScreen = null;

    switch(show) {
        case '0':
            displayScreen = <LandingScreen />;
            break;
        case '1':
            displayScreen = <Screen1 />
            break;
        case '2':
            displayScreen = <Screen2 />
            break;
        case '3':
            displayScreen = <Screen3 />
            break;
        case '4':
            displayScreen = <Screen4 />
            break;
        case '5':
            displayScreen = <Screen5 />
            break;
        default:
            displayScreen = <LandingScreen />;
    }

    return displayScreen;
}

export default Form;