import React from 'react';

import Arrow from '../Arrow';

const Next = ({clicked}) => (
    <div onClick={clicked} className="text-main-500 flex items-center cursor-pointer">
        <p className="text-sm mr-2 font-semibold">Next</p>
        <Arrow />
    </div>
);

export default Next;