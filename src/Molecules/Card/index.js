import React from 'react';
import Nav from './nav';


const Card = ({previous, next, hidePrevious, submit, showSubmit, dotClicked, ...props}) => (
    <div className="w-11/12 sm:w-2/3 lg:w-1/2 shadow-2xl bg-white border border-gray-200 px-2 mt-16 mb-40">
        <div className="m-10">
            {props.children}
        </div>
        <Nav 
            hidePrevious={hidePrevious} 
            previous={previous} 
            next={next} 
            submit={submit} 
            showSubmit={showSubmit} 
            dotClicked={dotClicked} 
        />  
    </div>
);

export default Card;