import React from 'react';

import Number from '../../Atoms/Number';
import NavMap from '../../Molecules/NavMap';
import Screens from './Screens';

const FormScreens = ({
        number, 
        title, 
        required, 
        previous, 
        next, 
        submit, 
        showSubmit, 
        dotClicked,
        ...props
    }) => (

    <div className="cardPositioning flex-col content-between">
        {/* <p> I am the form screen</p> */}
        <Number number={number} />
        <Screens 
            title={title} 
            required={required} 
            previous={previous} 
            next={next} 
            submit={submit} 
            showSubmit={showSubmit}
            dotClicked={dotClicked} 
        >
            {props.children}
        </Screens>
        <NavMap number={number} dotClicked={dotClicked} />
    </div>  
);

export default FormScreens;