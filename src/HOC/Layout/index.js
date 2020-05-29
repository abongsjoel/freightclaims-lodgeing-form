import React from 'react';

import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer';

import Aux from '../Auxilary'

const Layout = (props) => (
  <Aux>
      <Header />
      <main className="font-body">
          {props.children}
      </main>
      <Footer />
  </Aux>
);

export default Layout;