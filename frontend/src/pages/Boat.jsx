import React from "react";
import Navbar from "../components/Navbar";
import bateau from "../assets/bateau.png";
import minnkota from "../assets/minnkota.jpg";
import sondeur from "../assets/sondeur1.jpg";
import "./Boat.css";

function Boat() {
  return (
    <div>
      <Navbar />
      <h1 className="title-boat">Les équipements du bateau:</h1>
      <div className="all-page-boat">
        <div className="descri-boat">
          <h2>Le bateau</h2>
          <img
            className="img-descri-boat"
            src={bateau}
            alt="bateau pacific craft 625"
          />
          <p>
            Le<span className="bold">Pacific Craft Open 625</span>, propulsé par
            un moteur Yamaha de 130cv, incarne l'harmonie parfaite entre
            confort, performances maritimes exceptionnelles et fonctionnalités
            dédiées à la pêche, créant ainsi une expérience inoubliable lors de
            vos journées en mer.
          </p>
          <p>
            Doté d'une coque méticuleusement conçue, le Pacific Craft Open 625
            assure une stabilité remarquable, que vous naviguiez sur des eaux
            calmes ou agitées. Cette coque optimale offre une conduite en
            douceur, réduisant au minimum les secousses et garantissant une
            navigation confortable.
          </p>
          <p>
            Les fonctionnalités dédiées à la pêche, des porte-cannes et des
            viviers, sont intégrées pour faciliter chaque aspect de votre
            journée de pêche. Une journée à bord de ce bateau promet d'être
            mémorable, combinant performance, confort et une immersion totale
            dans l'univers captivant de la pêche en mer.
          </p>
        </div>
        <div className="descri-boat">
          <h2>Le moteur électrique</h2>
          <img
            className="img-descri-boat"
            src={minnkota}
            alt="motur électrique minn kota"
          />
          <p>
            Le<span className="bold">Minn Kota Riptide Terrova</span> est
            l'allié idéal des passionnés de pêche en mer, que ce soit en traîne,
            à la dérive ou en mode ancré. Ce moteur électrique, spécifiquement
            conçu pour l'environnement marin, offre une polyvalence
            exceptionnelle.
          </p>
          <p>
            Doté d'une technologie de pointe, le Riptide Terrova garantit une
            navigation en douceur, que vous vous déplaciez lentement en traîne
            pour une précision maximale, à la dérive pour explorer diverses
            zones de pêche, ou ancré pour cibler spécifiquement vos poissons.
          </p>
          <p>
            Avec son système d'ancrage électronique, le Terrova maintient votre
            position de manière fiable, offrant une stabilité remarquable pour
            vous concentrer pleinement sur votre pêche. Son design robuste et
            résistant à l'eau de mer assure une durabilité exceptionnelle,
            faisant du Minn Kota le choix privilégié des pêcheurs en quête de
            performance sur les eaux salées.
          </p>
        </div>
        <div className="descri-boat">
          <h2>Le sondeur</h2>
          <img className="img-descri-boat" src={sondeur} alt="sondeur furuno" />
          <p>
            Le<span className="bold">sondeur Furuno</span>révolutionne vos
            sorties de pêche en mer. Son interface intuitive et son écran haute
            résolution offrent une navigation précise. Grâce à sa fonction
            d'enregistrement de points GPS, vous accédez rapidement aux
            emplacements stratégiques où le poisson est potentiellement
            abondant.
          </p>
          <p>
            Que vous soyez en mouvement, à la dérive, ou ancré, le GP1971F
            maximise votre efficacité de pêche. Robuste et convivial, il est le
            compagnon idéal des passionnés de pêche. Transformez chaque sortie
            en une aventure navigatoire passionnante, tout en exploitant
            pleinement vos points GPS enregistrés pour une expérience de pêche
            inégalée.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boat;
