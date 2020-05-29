import React from 'react';

import Logo from '../../Atoms/Logo';

import Aux from '../Auxilary'

const Layout = (props) => (
  <Aux>
      <div className="mt-5 ml-5 fixed">
        <Logo />
      </div>
      <main className="font-body">
          {props.children}
      </main>
  </Aux>
);

export default Layout;