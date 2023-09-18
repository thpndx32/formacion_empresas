import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import '../Styles/css-styles/cardGrid.css';
import profileData from "../data/profiles.json";


export const CardGrid = () => {
  const profilesURL = "../data/profiles.json";
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    setProfiles(profileData);
  }, []);

  return (
    <section className="cardGrid">
			<h2 className="cardGrid__title">Talentos</h2>
      <div className="cardGrid-container">
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
};
