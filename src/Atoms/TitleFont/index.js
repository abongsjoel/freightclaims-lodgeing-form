import React from 'react';

const TitleFont = ({ required, ...props }) => (
    <h3 className="titleFont text-3xl font-bold">
        {props.children}
        <span className="text-red-600">{required ? " *" : null}</span>
    </h3>
);

export default TitleFont;