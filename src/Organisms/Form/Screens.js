import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';

const Screens = ({title, required, ...props}) => (
    <div className="cardPositioning">
        <Card>
            <FormElementTitle required={required}>{title}</FormElementTitle>
            <div className="mb-10">
                {props.children}
            </div>
        </Card>
    </div>  
);

export default Screens;