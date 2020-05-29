import React from 'react';

import Logo from '../../Atoms/Logo';

import Aux from '../Auxilary'

const Layout = (props) => (
  <Aux>
      <div>
        <Logo />
      </div>
      <main className="font-body">
          {props.children}
      </main>
  </Aux>
);

export default Layout;