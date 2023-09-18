import React from 'react';
import './Content_Home.css'

import { NavLink } from "react-router-dom";

const Content = () => {
    return (
    <header className="bg-image">
        <div className="bg-container">
            <h1>¡Bienvenidos a LLamkay!</h1>
            <h2>Conectando talentos con oportunidades: ¡Descubre, colabora y crece con nosotros!</h2>
            {/* <NavLink to="/">¡Regístrate Ahora!</NavLink> */}
            <p>¡Regístrate Ahora!</p>
        </div>
    </header>
    );
};

export default Content;
