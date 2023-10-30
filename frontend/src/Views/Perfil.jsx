import React, { useEffect, useState } from "react";
import "../Styles/css-styles/views.css"
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Config/Firebase";
import "../Styles/css-styles/profile_no_talent.css"


export const Perfil = () => {
  const [user, setUser] = useState(null);
  const userId = 'aROTvgHvBy9m2js23UuF'; // Juan en firebase

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(firestore, "Usuario", userId); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchUserData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="profile">
        <img src={user.photoURL} alt="Profile" className="profile__photo" />
        <h2 className="profile__name"><strong className="label">Nombre:</strong> {user.name}</h2>
        <p className="profile__email"><strong className="label">Correo:</strong> {user.correo}</p>
        <p className="profile__description"><strong className="label">Descripción:</strong> {user.description}</p>
      </div>
    </div>
  );  
};
