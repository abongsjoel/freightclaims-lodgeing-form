import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';

const Screens = ({
    title, 
    required, 
    previous, 
    next, 
    hidePrevious, 
    submit, 
    showSubmit, 
    dotClicked,
    ...props
}) => (

    <Card 
        previous={previous} 
        next={next} 
        hidePrevious={hidePrevious}
        submit={submit} 
        showSubmit={showSubmit}
        dotClicked={dotClicked} 
    >
        <FormElementTitle required={required}>{title}</FormElementTitle>
        <div className="mb-10">
            {props.children}
        </div>
    </Card>
);

export default Screens;