import React, { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../Config/Firebase";
import "../Styles/css-styles/profile_talent.css"
import "../Styles/css-styles/publicacion.css"



export const Publicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
  
    useEffect(() => {
      const fetchPublicaciones = async () => {
        const talentosCollectionRef = collection(firestore, "Usuario");
        const talentosSnapshot = await getDocs(talentosCollectionRef);
        const allPublicaciones = [];
        for (let talentoDoc of talentosSnapshot.docs) {
          const publicacionesCollectionRef = collection(talentoDoc.ref, "Publicaciones");
          const publicacionesSnapshot = await getDocs(publicacionesCollectionRef);
          allPublicaciones.push(...publicacionesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
        setPublicaciones(allPublicaciones);
      };
  
      fetchPublicaciones();
    }, []);
  
    if (!publicaciones.length) {
      return <div>Loading...</div>;
    }
  
    return (
        <section className="publicacionGrid">
          <h2 className="publicacionGrid__titulo">Talentos</h2>
          <div className="publicacionGrid-contenedor">
            {publicaciones.map((publicacion) => (
              <article className="tarjeta" key={publicacion.id}>
                <div className="tarjeta-contenedor">
                  <picture className="tarjeta__foto-contenedor">
                    <img className="tarjeta__foto" src={publicacion.photoURL} alt="" />
                  </picture>
                  <div className="tarjeta__info-contenedor">
                    <h2 className="tarjeta__nombre"><strong className="label">Talento: </strong>{publicacion.publisherName}</h2>
                    <p className="tarjeta__descripcion">💼 <strong className="label">Descripcion:</strong> {publicacion.description}</p>
                  </div>
                  <div className="tarjeta__boton-contenedor">
                    <div className="tarjeta__boton tarjeta__boton--chat">Ampliar</div>
                    <div className="tarjeta__boton tarjeta__boton--seguir">Agendar</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ); 
  };