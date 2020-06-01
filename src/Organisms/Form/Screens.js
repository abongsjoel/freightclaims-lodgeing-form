import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';

const Screens = ({title, required, previous, next, hidePrevious, ...props}) => (
    <Card previous={previous} next={next} hidePrevious={hidePrevious}>
        <FormElementTitle required={required}>{title}</FormElementTitle>
        <div className="mb-10">
            {props.children}
        </div>
    </Card>
);

export default Screens;