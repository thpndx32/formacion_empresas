import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header';
import Content from './Components/Content_Home';

import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Content/>
      </BrowserRouter>
    </>
  );
}

export default App;
