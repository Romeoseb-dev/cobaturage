import React from "react";
import Navbar from "../components/Navbar";
import leurre from "../assets/leurre.png";
import moule from "../assets/moule.png";

import "./Peche.css";

function Peche() {
  return (
    <div>
      <Navbar />
      <div className="all-page-fishing">
        <div className="page">
          <img className="img-leurre" src={leurre} alt="leurre" />
          <div className="fishing">
            <h1 className="title-fishing">
              Les différentes pêches en bateau:{" "}
            </h1>
            <h2 className="style-fishing">
              4 styles de pêche que je pratique:
            </h2>

            <li className="li-list">-la pêche aux sparidés</li>
            <li className="li-list">-la pêche sur chasse</li>
            <li className="li-list">-la pêche aux maquereaux</li>
            <li className="li-list">-la pêche au vif</li>
            <h1 className="title-style">la pêche aux sparidés:</h1>
            <div className="description">
              <h3>Période de pratique: Toute l'année</h3>
              <p>
                Les sparidés abondent dans la région. Il ne faut pas
                sous-estimer les pageots et les sars, car ce sont d'excellents
                combattants.
              </p>

              <h4>La pêche à la pierre</h4>
              <p>
                Ces dernières années, la technique de pêche à la pierre est
                devenue incontournable dans la région. La particularité de cette
                méthode, le plaisir d'un combat en direct et la qualité des
                prises, y contribuent grandement ! Cette technique est très
                dynamique et exige une grande attention. Il est crucial d'être
                constamment vigilant à la touche, sinon le ferrage peut être
                raté. Certains affirment que cette pêche peut devenir une
                véritable obsession.
              </p>
              <h4>La pêche à la moule en plastique ou moule de Marseille</h4>
              <p>
                Cette moule offre des situations de pêche très confortables et
                accessibles à tous. Ce montage est simple et s'applique à
                plusieurs espèces de poissons. Les touches ne tardent pas à se
                manifester.
              </p>
            </div>
            <h1 className="title-style">la pêche sur chasse:</h1>
            <div className="description">
              <h3>Période de pratique: Juin à Novembre </h3>
              <p>Cette méthode semble être la plus captivante en mer.</p>
              <p>
                Une part d'exploration en naviguant, puis tout s'enchaîne
                rapidement. Un oiseau s'approche de la surface, une
                éclaboussure, suivie d'une autre... la chasse commence. Les
                petits poissons chassés se retrouvent piégés en surface,
                subissant l'assaut des prédateurs
              </p>
              <p>
                Les oiseaux affluent en grand nombre, les chasseurs resserrent
                leur emprise sur le banc et jaillissent hors de l'eau...
              </p>
              <p>
                L'attaque des oiseaux à la surface et les écailles qui
                scintillent dans l'eau créent une atmosphère électrisante.
                Difficile de rester impassible face à cette frénésie.
              </p>
              <p>
                Cette excitation nous procure une montée d'adrénaline... la
                pêche débute ! Le combat qui s'ensuit est toujours ardu, donnant
                tout son sens à la pêche sportive !
              </p>
            </div>
            <h1 className="title-style">la pêche aux maquereaux</h1>
            <div className="description">
              <h3>Période de pratique: Juin à Octobre </h3>
              <p>Cette forme de pêche est accessible à tous.</p>
              <p>
                Des touches incessantes avec des poissons combattifs et de
                taille généreuse rendent la pêche simplement incontournable.
                Après une session axée sur les maquereaux, il est impossible de
                ne pas tomber amoureux de cette activité !
              </p>
              <p>
                Avec un équipement léger, ces poissons offrent une résistance
                remarquable. Il n'est pas rare de capturer rapidement plusieurs
                dizaines d'entre eux. Oubliez la sieste à côté de votre canne à
                pêche !
              </p>
              <p>
                Cette méthode est idéale pour apprendre à maîtriser des poissons
                combatifs.
              </p>
              <p>
                Certains jours, la quantité de poissons permet des approches
                créatives, que ce soit avec la canne à coup ou à mouche. Les
                poissons rejoignent le bateau en pleine forme et peuvent être
                relâchés sans aucun souci.
              </p>
              <p>
                Certains spécimens sont conservés dans un vivier pour servir
                d'appâts. À ce stade, on bascule dans une autre dimension avec
                la capture de poissons bien plus imposants et voraces !
              </p>
            </div>
            <h1 className="title-style">la pêche au vif</h1>
            <div className="description">
              <h3>Période de pratique: Mai à Novembre </h3>
              <p>
                La pêche au vif est une technique captivante qui implique
                d'utiliser un appât vivant préalablement pêché. Elle se pratique
                en traîne lente ou à la dérive avec l'aide du moteur électrique
                Minn Kota, assurant ainsi un déplacement du bateau en toute
                discrétion.
              </p>
              <p className="last">
                Les prises sont fréquemment des gros carnassiers tels que le
                tassergal, le denti, la liche amie ou la sériole. Les départs
                sont fulgurants, offrant des combats mémorables.
              </p>
            </div>
          </div>
          <img className="img-moule" src={moule} alt="moule" />
        </div>
      </div>
    </div>
  );
}

export default Peche;
