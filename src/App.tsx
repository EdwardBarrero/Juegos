import React from 'react';
import { Route, Routes } from 'react-router';

import { Home } from './app/modules/videogames';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Routes>      
        <Route path="/" Component={Home}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
