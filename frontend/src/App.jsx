import React, { createContext } from 'react';
import logo from './logo.svg';

import Header from './Components/Header';
import Content from './Components/Content_Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardGrid } from './Components/CardGrid';
import { Footer } from './Components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Config/Firebase';
import { PrivateRoutes } from './util/PrivateRoutes';
import { Home } from './Views/Home';
import { PerfilTalento } from './Views/PerfilTalento';
import { Perfil } from './Views/Perfil';

export const AuthContext = createContext();

function App() {
  const [usr, loadingUsr, errorUsr] = useAuthState(auth);
  return (
    (!loadingUsr &&<AuthContext.Provider value={[usr,loadingUsr]}>
       <BrowserRouter>
        <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={
              <Home/>
          }>
          </Route>
          <Route element={<PrivateRoutes/>}>
            <Route path="/perfilTalento" element={
              <PerfilTalento/>
            }></Route>
            <Route path="/perfil" element={
              <Perfil/>
            }></Route>
          </Route>
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>)
  );
}

export default App;