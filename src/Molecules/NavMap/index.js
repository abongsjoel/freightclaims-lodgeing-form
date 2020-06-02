import React from 'react';

import Dot from '../../Atoms/Dot';

const NavMap = ({number, dotClicked}) => (
    <div className="w-4/5">
        <div className="w-full flex justify-center items-center relative">
            <hr className="w-full bg-neutral-500 border" />
            <div className="w-full flex justify-between absolute items-center">
                <Dot active={Number(number) === 1} clicked={dotClicked.bind(this, 1, number)} />
                <Dot active={Number(number) === 2} clicked={dotClicked.bind(this, 2, number)} />
                <Dot active={Number(number) === 3} clicked={dotClicked.bind(this, 3, number)} />
                <Dot active={Number(number) === 4} clicked={dotClicked.bind(this, 4, number)} />
                <Dot active={Number(number) === 5} clicked={dotClicked.bind(this, 5, number)} />
            </div>
        </div>
    </div>  
);

export default NavMap;