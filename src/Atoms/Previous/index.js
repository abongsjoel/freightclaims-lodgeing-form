import React from 'react';

import Arrow from '../Arrow';

const Previous = () => (
    <div className="text-sec-500 flex items-center">
        <div className="transform rotate-180">
            <Arrow />
        </div>
        <p className="text-md font-semibold mr-2">Previous</p>
    </div>
);

export default Previous;