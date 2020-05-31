import React from 'react';
import Nav from './nav';


const Card = (props) => (
    <div className="w-1/2 shadow-2xl bg-white border border-gray-200 px-2 mt-24 mb-32">
        <div className="m-10">
            {props.children}
        </div>
        
        <Nav />  
    </div>
);

export default Card;