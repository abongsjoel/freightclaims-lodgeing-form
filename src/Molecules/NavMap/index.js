import React from 'react';

import Dot from '../../Atoms/Dot';

const NavMap = ({number}) => (
    <div className="w-4/5">
        <div className="w-full flex justify-center items-center relative">
            <hr className="w-full bg-neutral-500 border" />
            <div className="w-full flex justify-between absolute items-center">
                <Dot active={number === "1"} />
                <Dot active={number === "2"}/>
                <Dot active={number === "3"}/>
                <Dot active={number === "4"}/>
                <Dot active={number === "5"}/>
            </div>
        </div>
    </div>
);

export default NavMap;