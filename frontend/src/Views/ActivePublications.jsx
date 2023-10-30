import React, { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";
import "../Styles/css-styles/profile_talent.css"

export const Publicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
  
    useEffect(() => {
      const fetchPublicaciones = async () => {
        const talentosCollectionRef = collection(db, "Usuario");
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
      <div>
        {publicaciones.map((publicacion) => (
          <div key={publicacion.id}>
            <img src={publicacion.photoURL} alt="Publicación" />
            <h2>{publicacion.publisherName}</h2>
            <p>{publicacion.description}</p>
            <p>Precio: {publicacion.price}</p>
          </div>
        ))}
      </div>
    );  
  };