import React from "react";
import Navigation from "../components/Navigation";
import voituresOccasion from "../assets/json/voituresOccasion.json";

const NosVoitures = () => {
  return (
    <div className="nosVoitures">
        <Navigation />
        <div id="voitures">
          {
            voituresOccasion.map((valeur) => {
              return (
                <div className='voiture'>
                  <p>{valeur.marque} {valeur.modele}</p>
                  <p></p>
                  <img src={valeur.lienImg} alt={`voiture ${valeur.marque} ${valeur.modele}`} className="imgVoiture" />
                  <p>{valeur.prix} €</p>
                  <p>{valeur.prix} km</p>
                  <p>{valeur.carburant}</p>
                  <p>{valeur.boiteVitesse}</p>
                  <p>{valeur.annee}</p>
                  <p>{valeur.nbPlaces} places</p>
                  <p>{valeur.nbPortes} portes</p>
                  <p>Puissance fiscale : {valeur.puissFiscale} CV</p>
                  <p>Puissance DIN : {valeur.puissDIN} CH</p>
                  <p>Couleur : {valeur.couleur}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  );
};

/*
<div class="voiture">
            <p>Renault Megane</p>
            <img src="https://carapi.trustcar.info/getImage?make=Peugeot&model=207" alt="voiture Peugeot 207" className="imgVoiture" />
            <p>1000€</p>
            <p>{voituresOccasions}</p>
            <p>2009</p>
            <p>Voir plus</p>
            <p>X places X</p>
            <p>Puissance fiscale : 9 CV</p>
            <p>Puissance DIN .. CH </p>
            <p>Couleur : ??</p>
          </div>
          <div class="voiture">
            <p>Renault Megane</p>
            <img src="https://carapi.trustcar.info/getImage?make=Peugeot&model=207" alt="voiture Peugeot 207" className="imgVoiture" />
            <p>1000€</p>
            <p>Diesel</p>
            <p>2009</p>
            <p>Voir plus</p>
            <p>X places X</p>
            <p>Puissance fiscale : 9 CV</p>
            <p>Puissance DIN .. CH </p>
            <p>Couleur : ??</p>
          </div>
          <div class="voiture">
            <p>Renault Megane</p>
            <img src="https://carapi.trustcar.info/getImage?make=Peugeot&model=207" alt="voiture Peugeot 207" className="imgVoiture" />
            <p>1000€</p>
            <p>Diesel</p>
            <p>2009</p>
            <p>Voir plus</p>
            <p>X places X</p>
            <p>Puissance fiscale : 9 CV</p>
            <p>Puissance DIN .. CH </p>
            <p>Couleur : ??</p>
          </div>
*/

export default NosVoitures;