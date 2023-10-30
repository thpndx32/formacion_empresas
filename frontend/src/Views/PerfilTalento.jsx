import React, { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";
import "../Styles/css-styles/profile_talent.css"

export const PerfilTalento = () => {
  const [user, setUser] = useState(null);
  const [talento, setTalento] = useState(null);
  const userId = 'afVj5AioXMhGfd6vHa4A'; // pablo en firebase

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "Usuario", userId); // accedemos a 'Usuario' y el documento con el 'userId'
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
        const talentoCollectionRef = collection(docRef, "Talento");
        const talentoSnapshot = await getDocs(talentoCollectionRef);
        setTalento(talentoSnapshot.docs.map(doc => doc.data()));
      } else {
        console.log("No such document!");
      }
    };

  fetchUserData();
  }, [userId]);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push("⭐"); // Agrega un emoticon de estrella por cada estrella
    }
    return stars.join(" "); // Convierte las estrellas en una cadena separada por espacios
  };

  if (!talento) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="profile">
        <img src={user.photoURL} alt="Profile" className="profile__photo" />
        {talento.map((t, index) => (
          <div key={index}>
            <p><strong className="label">Stars:</strong> {renderStars(t.stars)} ({t.reviews})</p>
          </div>
        ))}
        <h2 className="profile__name"><strong className="label">Name:</strong> {user.name}</h2>
        <p className="profile__email"><strong className="label">Email:</strong> {user.correo}</p>
        <p className="profile__description"><strong className="label">Description:</strong> {user.description}</p>
      </div>
    </div>
  );  
};
