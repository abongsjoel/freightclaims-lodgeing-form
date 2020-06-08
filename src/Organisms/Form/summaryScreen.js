import React from 'react';

// import InputRadio from '../../Atoms/InputElements/InputRadio';

import Screens from './Screens';

const SummaryScreen = ({submit, hidePrevious, clientType, initialValue}) => (
    <div className="cardPositioning">
        <Screens title="Summary" submit={submit} hidePrevious={hidePrevious} showSubmit={true}>
            
        </Screens>
    </div>  
);

export default SummaryScreen;  