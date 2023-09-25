import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header';
import Content from './Components/Content_Home';
import Form from "./Components/Form";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardGrid } from './Components/CardGrid';
import { Footer } from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/Home" element={
          <>
            <Content/>
            <CardGrid/>     
          </>
        }/>
        <Route path="/CompleteProfile" element={<Form/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
