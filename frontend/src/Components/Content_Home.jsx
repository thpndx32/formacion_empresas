import React from "react";
import "../Styles/css-styles/Content_Home.css";

import { NavLink } from "react-router-dom";
import HeroImage from "../Images/hero-image.png";
const Content = () => {
  return (
    <div className="hero">
      <figure className="hero-background">
        <img className="hero-background__img"src={HeroImage} alt="" />
      </figure>
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">Bienvenido a <br/> LLamkay</h1>
          <h2 className="hero__subtitle">
            Conectando talentos con oportunidades: ¡Descubre, colabora y crece
            con nosotros!
          </h2>
          {/* <NavLink to="/">¡Regístrate Ahora!</NavLink> */}
          <a className="hero__register" >Regístrate Ahora</a>
        </div>
      </div>
    </div>
  );
};

export default Content;
