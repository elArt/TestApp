import React from 'react';

import Button from 'src/components/Button';
import logo from './logo.svg';
import './App.css';

function App() {

  const handlerBtn = () => {
    console.log('Do not use arrow functions in render methods in the REACT!!!!!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Button title="Click on me" actionClick={handlerBtn} />
      </header>
    </div>
  );
}

export default App;
