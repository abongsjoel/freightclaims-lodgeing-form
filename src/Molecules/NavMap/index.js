import React from 'react';

import Dot from '../../Atoms/Dot';

const NavMap = ({number, dotClicked}) => (
    <div className="w-4/5">
        <div className="w-full flex justify-center items-center relative">
            <hr className="w-full bg-neutral-500 border" />
            <div className="w-full flex justify-between absolute items-center">
                {console.log("number is: ", number)}
                debugger
                <Dot active={Number(number) === 1} clicked={dotClicked} />
                <Dot active={Number(number) === 2} clicked={dotClicked} />
                <Dot active={Number(number) === 3} clicked={dotClicked} />
                <Dot active={Number(number) === 4} clicked={dotClicked} />
                <Dot active={Number(number) === 5} clicked={dotClicked} />
            </div>
        </div>
    </div>
);

export default NavMap;