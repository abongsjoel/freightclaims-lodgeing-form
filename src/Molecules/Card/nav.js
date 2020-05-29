import React from 'react';

import Next from '../../Atoms/Next';
import Previous from '../../Atoms/Previous';

const Nav = () => (
    <div className="flex justify-between">
        <Previous />
        <Next />
    </div>
);

export default Nav;