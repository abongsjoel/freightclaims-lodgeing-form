import React from 'react';

import Dot from '../../Atoms/Dot';

const NavMap = () => (
    <div className="w-4/5">
        <div className="w-full flex justify-center items-center relative">
            <hr className="w-full bg-neutral-500 border" />
            <div className="w-full flex justify-between absolute items-center">
                <Dot active/>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </div>
        </div>
    </div>
);

export default NavMap;