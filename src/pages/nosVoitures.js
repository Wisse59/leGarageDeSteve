import React from "react";
import { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import voituresOccasion from "../assets/json/voituresOccasion.json";

const NosVoitures = () => {
  const [noPage, setNoPage] = useState(1);
  const [noPagesTotal, setNoPagesTotal] = useState(Math.floor((voituresOccasion.length-1)/15)+1);
  let debutPage = ((noPage-1)*14 + (noPage-1));
  let finPage = debutPage + 15;
  //1er et dernier id de voiture affiche par page
  
  useEffect(() => {
      window.scrollTo({
          top: document.documentElement.scrollHeight
      });
  }, [noPage]);
  //lorsque la page change, on se retrouve en bas de la page
  //afin qu'il soit plus simple de passer plusieurs pages a la suite

  
  const [voirPlusActif, setVoirPlusActif] = useState(
    Array(voituresOccasion.length).fill(false)
  );
  function activerUnBouton(i) {
    if (voirPlusActif[i-1] === false) {
      setVoirPlusActif([
        ...voirPlusActif.slice(0, i-1),
        true,
        ...voirPlusActif.slice(i)
      ])
    } else {
      setVoirPlusActif([
        ...voirPlusActif.slice(0, i-1),
        false,
        ...voirPlusActif.slice(i)
      ])
    }
  }

  function reculerPage() {
    if (noPage > 1) {
      setNoPage(noPage-1);
    }
  }
  function avancerPage() {
    if (noPage < noPagesTotal) {
      setNoPage(noPage+1);
    }
  }

  const choixPages = [];
  //cette partie est integree en JSX plus tard dans le code
  for (let i = 1; i <= noPagesTotal; i++) {
    choixPages.push(
      <li>
        <button onClick={() => setNoPage(i)}>{i}</button>
      </li>
    )
  };
  
  return (
    <div className="nosVoitures">
        <Navigation />
        <div id="voitures">
          {
            voituresOccasion.slice(debutPage, finPage).map((valeur) => {
              return (
                <div className='voiture' key={valeur.id}>
                  <p>{valeur.marque} {valeur.modele}</p>
                  <img src={valeur.lienImg} alt={`voiture ${valeur.marque} ${valeur.modele}`} />
                  <p><span>{valeur.prix} €</span></p>
                  <p>{valeur.km} km</p>
                  <p>{valeur.carburant}</p>
                  <p>{valeur.boiteVitesse}</p>
                  <p>{valeur.annee}</p>
                  <button onClick={() => (activerUnBouton(valeur.id))}>Voir plus</button>
                  {
                    voirPlusActif[valeur.id-1]===true && (
                        <div className="infosSup">
                          <p>{valeur.nbPlaces} places</p>
                          <p>{valeur.nbPortes} portes</p>
                          <p>Puissance fiscale : {valeur.puissFiscale} CV</p>
                          <p>Puissance DIN : {valeur.puissDIN} CH</p>
                          <p>Couleur : {valeur.couleur}</p>
                        </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
        <div className="choixPages">
          <ul>
            <li><button onClick={() => reculerPage()}><i className="fa-solid fa-angles-left"></i></button></li>
            {/* className={(boutonPage) => (boutonPage.isActive ? "boutonActif" : "")} */}
            {choixPages}
            <li><button onClick={() => avancerPage()}><i className="fa-solid fa-angles-right"></i></button></li>
          </ul>
        </div>
    </div>
  );
};

export default NosVoitures;