import React from 'react';

import Logo from '../../Atoms/Logo';
import Number from '../../Atoms/Number';
import NavMap from '../../Molecules/NavMap';

import Aux from '../Auxilary'

const Layout = ({number, dotClicked, ...props}) => (
  <Aux>
      <div className="mt-5 ml-5 fixed">
        <Logo />
      </div>
      <div className="flex justify-center items-start relative">
        <div className="absolute mt-24">
          <Number number={number} />
        </div>
      </div>
      <main className="font-body">
          {props.children}
      </main>
      <div className="flex justify-center h-screen items-end pb-24  bg-green-500  ">
          <NavMap number={number} dotClicked={dotClicked} />
      </div>
  </Aux>
);

export default Layout;