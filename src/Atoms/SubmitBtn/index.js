import React from 'react';

import Arrow from '../Arrow';

const SubmitBtn = ({clicked}) => (
    <div onClick={clicked} className="text-red-500 flex items-center cursor-pointer">
        <p className="text-sm mr-2 font-semibold">Submit</p>
        <Arrow />
    </div>
);

export default SubmitBtn;