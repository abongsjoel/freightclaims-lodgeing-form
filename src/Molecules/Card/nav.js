import React from 'react';

import Next from '../../Atoms/Next';
import Previous from '../../Atoms/Previous';
import SubmitBtn from '../../Atoms/SubmitBtn';

const Nav = ({previous, next, submit, hidePrevious, showSubmit}) => {
    let nav = null;

    if(hidePrevious) {
        nav = (
            <div className="flex justify-end">
                <Next clicked={next} />
            </div>
        );
    } else if(showSubmit) {
        nav = (
            <div className="flex justify-between">
                <Previous clicked={previous} />
                <SubmitBtn clicked={submit} />
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