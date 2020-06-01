import React, { useState } from 'react';

// import Aux from '../../HOC/Auxilary';
import LandingScreen from './landing-screen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const Form = () => {

    const [show, setShow] = useState(0)

    const max = 5;

    const previousHandler = () => {
        if (show > 0) {
            setShow(preShow => preShow - 1);
        }
        console.log("show is now: ", show);
    }

    const nextHandler = () => {
        if (show < max) {
            setShow(preShow => preShow + 1)
        }
        console.log("show is now: ", show);
    }

    let displayScreen = null;

    switch(show) {
        case 0:
            displayScreen = <LandingScreen previous={previousHandler} next={nextHandler} />;
            break;
        case 1:
            displayScreen = <Screen1 previous={previousHandler} next={nextHandler} />
            break;
        case 2:
            displayScreen = <Screen2 previous={previousHandler} next={nextHandler} />
            break;
        case 3:
            displayScreen = <Screen3 previous={previousHandler} next={nextHandler} />
            break;
        case 4:
            displayScreen = <Screen4 previous={previousHandler} next={nextHandler} />
            break;
        case 5:
            displayScreen = <Screen5 />
            break;
        default:
            displayScreen = <LandingScreen />;
    }

    return displayScreen;
}

export default Form;