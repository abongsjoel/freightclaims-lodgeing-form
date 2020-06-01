import React from 'react';

import Next from '../../Atoms/Next';
import Previous from '../../Atoms/Previous';

const Nav = ({previous, next, hidePrevious}) => {
    let nav = null;

    if(hidePrevious) {
        nav = (
            <div className="flex justify-end">
                <Next clicked={next} />
            </div>
        );
    } else {
        nav = (
            <div className="flex justify-between">
                <Previous clicked={previous} />
                <Next clicked={next} />
            </div>
        );
    }
    return nav;
}

export default Nav;