import React from 'react';
import Nav from './nav';


const Card = (props) => (
    <div className="w-1/2 shadow-2xl bg-white border border-gray-300">
        <div className="m-5">
            {props.children}
        </div>
        
        <Nav />
    </div>
);

export default Card;