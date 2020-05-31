import React from 'react';

import Dot from '../../Atoms/Dot';

const NavMap = () => (
    // <div className="w-4/5 relative bg-blue-500">
    //     <hr className="bg-neutral-500 border absolute inset-0 bottom-0" />
    //     <div className="absolute w-full inset-auto">
    //         <div className="flex justify-between">
    //             <Dot active/>
    //             <Dot />
    //             <Dot />
    //             <Dot />
    //             <Dot />
    //         </div>
    //     </div>
    // </div>
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