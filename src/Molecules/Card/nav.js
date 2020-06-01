import React from 'react';

import Next from '../../Atoms/Next';
import Previous from '../../Atoms/Previous';

const Nav = ({previous, next}) => (
    <div className="flex justify-between">
        <Previous clicked={previous} />
        <Next clicked={next} />
    </div>
);

export default Nav;