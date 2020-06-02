import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';


// import Aux from '../../HOC/Auxilary';
import LandingScreen from './landing-screen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const Form = () => {

    const [show, setShow] = useState(0);
    const [direction, setDirection] = useState('forward');

    const [clientType, setClientType] = useState('');
    const [freightType, setFreightType] = useState('');
    const [fullName, setFullName] = useState('');

    const max = 5;

    const nameChangedHandler = (event) => {
      // setFullName(event.target.value);
    }

    const previousHandler = () => {
        if (show > 0) {
            setShow(preShow => preShow - 1);
            setDirection('backward');
        }
    }

    const nextHandler = () => {
        if (show < max) {
            setShow(preShow => preShow + 1);
            setDirection('forward');
        }

    }

    const dotClickedHandler = (value) => {
        setShow(value);
        setDirection('downward');
    }

    const submitHandler = () => {
        const data = {
          clientType,
          freightType,
          fullName,
        }
        console.log("It's time to submit ", data);
    }

    const pages = [
        ({ style }) => (
            <animated.div style={{ ...style }}>
              <LandingScreen 
                next={nextHandler} 
                hidePrevious={true} 
                clientType={event => setClientType(event.target.value)} 
                initialValue={clientType}
              />
            </animated.div>
        ),
        ({ style }) => (
            <animated.div style={{ ...style }}>
              <Screen1 
                previous={previousHandler} 
                next={nextHandler} number={show} 
                dotClicked={dotClickedHandler} 
                fullNames={event => nameChangedHandler(event)} 
                initialValue={fullName}
              />
            </animated.div>
        ),
        ({ style }) => (
          <animated.div style={{ ...style }}>
            <Screen2 
              previous={previousHandler} 
              next={nextHandler} 
              number={show} 
              dotClicked={dotClickedHandler} 
            />
          </animated.div>
        ),
        ({ style }) => (
          <animated.div style={{ ...style }}>
            <Screen3 
              previous={previousHandler} 
              next={nextHandler} 
              number={show} 
              dotClicked={dotClickedHandler} 
            />
          </animated.div>
        ),
        ({ style }) => (
          <animated.div style={{ ...style }}>
            <Screen4 
            previous={previousHandler} 
            next={nextHandler} 
            number={show} 
            dotClicked={dotClickedHandler} 
            freightType={event => setFreightType(event.target.value)}
            initialValue={freightType}
          />

          </animated.div>
        ),
        ({ style }) => (
          <animated.div style={{ ...style }}>
            <Screen5 
            previous={previousHandler} 
            submit={submitHandler} 
            number={show} 
            dotClicked={dotClickedHandler} />
          </animated.div>
        ),
    ]
  
    const transitions = useTransition(show, p => p, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    const transitionsBackward = useTransition(show, p => p, {
      from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    })
    const transitionsDownward = useTransition(show, p => p, {
      from: { opacity: 0, transform: 'translate3d(0%,-100%,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(0%,50%,0)' },
    })

    let screen = null;

    if (direction === "forward") {
        screen = transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })
        
    } else if (direction === "backward") {
        screen = transitionsBackward.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })
    } else {
        screen = transitionsDownward.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })
    }
    
    return (
        <div className="simple-trans-main">
          {screen}
        </div>
      )

}

export default Form;