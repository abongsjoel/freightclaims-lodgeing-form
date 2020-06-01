import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import Form from './Organisms/Form';

function App() {
  return (
    <div>
      <Layout>
        <Form />
      </Layout>
    </div>  
  );
}

export default App;


// import React, {useState, useCallback} from 'react';
// import {useTransition, animated} from 'react-spring';
// import './App.css';

// // import LandingScreen from './LandingScreen';
// import LandingScreen from './Organisms/Form/landing-screen';
// // import Screen1 from './Screen1';
// import Screen1 from './Organisms/Form/Screen1';
// import Screen2 from './Organisms/Form/Screen2';
// // import Screen2 from './Screen2';

// function App() {
//   const [show, setShow] = useState(0)

//   const max = 5;

//   const previousHandler = () => {
//       if (show > 0) {
//           setShow(preShow => preShow - 1);
//       }
//   }

//   const nextHandler = () => {
//       if (show < max) {
//           setShow(preShow => preShow + 1)
//       }

//   }

//   const dotClickedHandler = (value) => {
//       setShow(value);
//   }

//   // const submitHandler = () => {
//   //     console.log("It's time to submit");
//   // }

//   let displayScreen = null;

//   switch(show) {
//       case 0:
//           displayScreen = <LandingScreen next={nextHandler} hidePrevious={true} />;
//           break;
//       case 1:
//           displayScreen = <Screen1 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} />
//           break; 
//       case 2: 
//           displayScreen = <Screen2 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} />
//           break; 
//       // case 3: 
//       //     displayScreen = <Screen3 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} />
//       //     break; 
//       // case 4: 
//       //     displayScreen = <Screen4 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} />
//       //     break;
//       // case 5:
//       //     displayScreen = <Screen5 previous={previousHandler} submit={submitHandler} number={show} dotClicked={dotClickedHandler} />
//       //     break;
//       default:
//           displayScreen = <LandingScreen />;
//   }


//   // return displayScreen;

//   const pages = [
//     ({ style }) => <animated.div style={{ ...style }}><LandingScreen next={nextHandler} hidePrevious={true} /></animated.div>,
//     ({ style }) => <animated.div style={{ ...style }}><Screen1 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} /></animated.div>,
//     ({ style }) => <animated.div style={{ ...style }}><Screen2 previous={previousHandler} next={nextHandler} number={show} dotClicked={dotClickedHandler} />/></animated.div>,
//   ]
  
//     // const [index, set] = useState(0)
//     // const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//     const transitions = useTransition(show, p => p, {
//       from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//       enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//       leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//     })
//     return (
//       <div className="simple-trans-main">
//         {transitions.map(({ item, props, key }) => {
//           const Page = pages[item]
//           return <Page key={key} style={props} />
//         })}
//       </div>
//     )

// }

// export default App;
