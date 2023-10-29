import React, { useEffect, useState } from "react";
import "../Styles/css-styles/views.css"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import "../Styles/css-styles/profile_no_talent.css"

export const Perfil = () => {
  const [user, setUser] = useState(null);
  const userId = 'aROTvgHvBy9m2js23UuF'; // edu en firebase

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "Usuario", userId); // accedemos a 'Usuario' y el documento con el 'userId'
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
        <img src='https://bl6pap003files.storage.live.com/y4mayfjlsHlMUq3xJzINAlyRijjeReRRCtOD34n_TR4WVykJXQD8-o4MEXLK9NNoIuw48LcxpnNcv8zvXDUeYSogx0kHhOrqg3VaiZQWTH_aMsuCyZi2OkOeOkp3gfWp9nflIjL7WHyDpduxAZym-En7yXXq5Oe11JzflptrSKAJWsO5tTuhFELLUZrJ-fcwMw5fLQwiT60QINeFNdUdO22ylFbOg-BH37o8reTGyM2fDE?encodeFailures=1&width=599&height=436' alt="Profile" className="profile__photo" />
        <h2 className="profile__name"><strong className="label">Name:</strong> {user.name}</h2>
        <p className="profile__email"><strong className="label">Email:</strong> {user.email}</p>
        <p className="profile__description"><strong className="label">Description:</strong> {user.description}</p>
      </div>
    </div>
  );  
};
