import React from 'react';

import Card from '../../Molecules/Card';
import TitleFont from '../../Atoms/TitleFont';

const LandingScreen = () => (
    <div className="w-full h-screen flex justify-center items-center">
        <Card>
            <TitleFont required={true}>I am a ?</TitleFont>
        </Card>
    </div>  
);

export default LandingScreen;