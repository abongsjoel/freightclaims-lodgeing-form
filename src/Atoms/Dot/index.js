import React from 'react';

const Dot = ({active, clicked}) => {

    let dot = <div className="bg-neutral-900 w-2 h-2 rounded-full cursor-pointer" onClick={clicked}></div>

    if(active) {
        dot = <div className="bg-main-500 w-4 h-4 shadow-lg rounded-full"></div>
    }
    return dot;
}

export default Dot;