import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import Form from './Organisms/Form';

function App() {
  return (
    <div>
      <Layout>
        <Form />
      </Layout>
    </div>  
  );
}

export default App;
