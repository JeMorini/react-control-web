import React, { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { onSnapshot, doc } from "firebase/firestore";

function App() {
  initializeApp({
    apiKey: "AIzaSyCwApotHrYwG-tnp18ZyQTMWUe5Ou-iv1g",
    authDomain: "react-control-7f0af.firebaseapp.com",
    projectId: "react-control-7f0af",
    storageBucket: "react-control-7f0af.appspot.com",
    messagingSenderId: "208604699343",
    appId: "1:208604699343:web:8bc39c85404b40f3dc35ba",
    measurementId: "G-GSDF3TD0XK",
  });

  const db = getFirestore();
  const [height, setHeight] = useState(0);
  const [silhouetteHeight, setSilhouetteHeight] = useState(1);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    setSilhouetteHeight(Math.random().toFixed(1) * 200);
    onSnapshot(doc(db, "positions", "U33dYZmLLevqeugiTV84"), (doc) => {
      setHeight(doc.data().height);
    });
  }, [db, success]);

  useEffect(() => {
    if (height === silhouetteHeight) {
      alert("PARABÉNS");
      setSuccess((prevState) => !prevState);
    }
  }, [height, silhouetteHeight]);

  return (
    <div>
      <header className="App">
        <div style={{ marginTop: height, position: "absolute" }}>
          <img
            src="https://mario.wiki.gallery/images/9/91/Goomba_vector_art_2.svg"
            alt="person"
            className="Image"
          />
        </div>
        <div style={{ marginTop: silhouetteHeight, position: "absolute" }}>
          <img
            src="https://mario.wiki.gallery/images/9/91/Goomba_vector_art_2.svg"
            alt="person"
            className="ImageSilhouette"
          />
        </div>
        <h1 className="Title">ENCAIXE O PERSONAGEM NA SILHUETA</h1>
      </header>
    </div>
  );
}

export default App;
