import React from 'react';
import Nav from './nav';


const Card = ({previous, next, ...props}) => (
    <div className="w-1/2 shadow-2xl bg-white border border-gray-200 px-2 mt-16 mb-40">
        <div className="m-10">
            {props.children}
        </div>
        <Nav previous={previous} next={next} />  
    </div>
);

export default Card;