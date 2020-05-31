import React from 'react';

import Card from '../../Molecules/Card';
import FormElementTitle from '../../Atoms/FormElementTitle';

const LandingScreen = () => (
    <div className="w-full h-screen flex justify-center items-center">
        <Card>
            <FormElementTitle required={true}>I am a ?</FormElementTitle>
        </Card>
    </div>  
);

export default LandingScreen;