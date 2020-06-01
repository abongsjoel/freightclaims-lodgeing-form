import React from 'react';

import Arrow from '../Arrow';

const Previous = ({clicked}) => (
    <div onClick={clicked} className="text-sec-500 flex items-center cursor-pointer">
        <div className="transform rotate-180">
            <Arrow />
        </div>
        <p className="text-sm ml-2 font-semibold">Previous</p>
    </div>
);

export default Previous;