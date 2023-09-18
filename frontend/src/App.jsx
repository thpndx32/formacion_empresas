import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header';
import Content from './Components/Content_Home';

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CardGrid } from './Components/CardGrid';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Content/>
      <CardGrid/>     
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
