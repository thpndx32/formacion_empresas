import React from "react";
import "../Styles/css-styles/card.css";

export const Card = ({ profile }) => {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push("⭐"); // Agrega un emoticon de estrella por cada estrella
    }
    return stars.join(" "); // Convierte las estrellas en una cadena separada por espacios
  };

  return (
    <article className="card">
      <div className="card-container">
        <picture className="card__photo-container">
          <img className="card__photo" src={`${profile.photoURL}`} alt="" />
        </picture>
        <div className="card__info-container">
          <h2 className="card__nickname">{profile.nickname}</h2>
          <p className="card__occupation">💼 {profile.occupation}</p>
          <p className="card__stars">
            ⭐ {profile.stars} ({profile.reviews})
          </p>
        </div>
        <div className="card__button-container">
          <div className="card__button card__button--chat">Chatear</div>
          <div className="card__button card__button--follow">Seguir</div>
        </div>
      </div>
    </article>
  );
};
