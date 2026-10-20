import { useState, useEffect, useRef } from 'react';
import Navigation from "../components/Navigation";
import { useLocation } from 'react-router-dom';
import voituresOccasion from "../assets/json/voituresOccasion.json";

const NosVoitures = ({ afficherPopUp, setAfficherPopUp }) => {  
  const recevoir = useLocation();
  const { 
    marqueChoisie, 
    modeleChoisi, 
    prixAccueil, 
    kmMaxAccueil,
    noVC, 
    carouselEstActif
  } = recevoir.state || {};
  
  const [noPage, setNoPage] = useState(1);
  const [noPagesTotal, setNoPagesTotal] = useState(Math.floor((voituresOccasion.length-1)/15)+1);
  let debutPage = ((noPage-1)*14 + (noPage-1));
  let finPage = debutPage + 15;
  //1er et dernier id de voiture affiche par page
  
  const refPage = useRef(noPage);
  useEffect(() => {
    /*lorsque la page change, on se retrouve en bas de la page
    afin qu'il soit plus simple de passer plusieurs pages a la suite*/
    if (refPage.current !== noPage) { //pour eviter le cas de l'initialisation
      window.scrollTo({
          top: document.documentElement.scrollHeight
      });
    }
    refPage.current = noPage;

    /*lorsque l'on choisit une voiture depuis le carousel de l'accueil*/
    const voitureCarousel  = noVC ? document.getElementById('voiture-' + noVC) : null

    if (carouselEstActif === true && voitureCarousel) {
      voitureCarousel.scrollIntoView({
        behavior: 'smooth',
        block: 'start' //en haut de l'ecran
      });
      setVoirPlusActif([
        ...voirPlusActif.slice(0, noVC-1),
        true,
        ...voirPlusActif.slice(noVC)
      ]);
    }
  }, [noPage]);

  const [voirPlusActif, setVoirPlusActif] = useState(
    Array(voituresOccasion.length).fill(false)
  );
  function actionnerUnBouton(i) {
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
  
  const [recherche, setRecherche] = useState('');
  const [prix, setPrix] = useState(30001);
  const [km, setKm] = useState(250000);
  const [carburant, setCarburant] = useState('Tous');
  const [boiteVitesse, setBoiteVitesse] = useState('Toutes');
  const [couleur, setCouleur] = useState('Toutes');
  const[voituresTriees, setVoituresTriees] = useState(voituresOccasion);
  useEffect(() => {        
    setVoituresTriees(
      voituresOccasion.filter((valeur) =>
        (valeur.marque+" "+valeur.modele).toLowerCase().includes(recherche.toLowerCase())
        && (valeur.prix <= prix)
        && (valeur.km <= km)
        && ((valeur.carburant === carburant) || (carburant === 'Tous'))
        && ((valeur.boiteVitesse === boiteVitesse) || (boiteVitesse === 'Toutes'))
        && ((valeur.couleur === couleur) || (couleur === 'Toutes')))
    )
  }, [recherche, prix, km, carburant, boiteVitesse, couleur]);

  const mesPrix = [0, 2500, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000];
  const [mesValeurs, setMesValeurs] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function trierPrix() {
    const nouvValeurs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const voituresTrieesIndepPrix = voituresOccasion.filter((valeur) =>
        (valeur.marque + " " + valeur.modele).toLowerCase().includes(recherche.toLowerCase())
        && (valeur.km <= km)
        && ((valeur.carburant === carburant) || (carburant === 'Tous'))
        && ((valeur.boiteVitesse === boiteVitesse) || (boiteVitesse === 'Toutes'))
        && ((valeur.couleur === couleur) || (couleur === 'Toutes')));

    voituresTrieesIndepPrix.map((valeur) => {
      mesPrix.map((prix, i) => {
        if (valeur.prix <= prix) {
          nouvValeurs[i] = nouvValeurs[i] + 1;
        }
      })
    })
    setMesValeurs(nouvValeurs);
  }

  useEffect(() => {
    setNoPagesTotal(Math.floor((voituresTriees.length-1)/15)+1);

    trierPrix();
  }, [voituresTriees]);

  useEffect(() => {    
    if ((marqueChoisie !== undefined) && (modeleChoisi !== undefined)) {    
      setRecherche(marqueChoisie + " " + modeleChoisi);
    }
    if (kmMaxAccueil !== undefined) {
      setKm(kmMaxAccueil);
    }

    if (prixAccueil !== undefined) {
      //les prix de l'accueil sont de 2500€ minimum
      if (prixAccueil < 3000) {
        setPrix(prixAccueil - (prixAccueil % 500))
      } else if (prixAccueil < 10000) {
        setPrix(prixAccueil - (prixAccueil % 1000))
      } else if (prixAccueil < 30000) {
        setPrix(prixAccueil - (prixAccueil % 10000))
      } else {
        setPrix(30000)
      }
    }
  }, [marqueChoisie, modeleChoisi, prixAccueil, kmMaxAccueil ]);

  useEffect(() => {
    if (noVC) {
      setNoPage((Math.floor((noVC-1)/15))+1);
    }
  }, []);

  return (
    <div className="nosVoitures">
        <Navigation />
        <div id='introNosVoituresContainer'>
          {
          afficherPopUp && (
            <div id='introNosVoitures'>
              <p onClick={() => setAfficherPopUp(false)}><i class="fa-solid fa-circle-xmark"></i></p>
              <p>Bienvenue dans la section de vente de nos voitures !</p>
              <p>Ici, vous pouvez voir les véhicules disponibles afin de</p>
              <p>prendre rendez-vous pour vérifier son état en personne</p>
              <br/>
              <p>Bonne recherche !</p>
            </div>
          )
          }
        </div>
        <div id="recherchesNosVoitures">
          <form id="conditionsVoiture">
            <input id="rechercheTxt" type="text" placeholder="Cherchez un modèle" value={recherche} onChange={(e) => setRecherche(e.target.value)}></input>
            <div id="texteEtPrix">
              <p>Prix max</p>
              <div id="selectionPrix">
                {
                  mesPrix.map((valeur, i) =>
                    <div className="unPrix" onClick={() => setPrix(valeur)}>
                      <svg width="37" height={mesValeurs[i]}>
                        <rect
                        width="37" height={mesValeurs[i]} fill={prix === mesPrix[i]? 'rgb(237, 98, 80)' : 'rgb(60, 198, 205)'} />
                      </svg>
                      <p className="txtSelectionPrix">{valeur}€</p>
                    </div>
                  )
                }
              </div>
            </div>
            <label htmlFor="voituresKm">Km max</label>
            <div className="valeurEtDonnee">
              <input type="range" id="voituresKm" max="500000" min="0" onChange={(e) => setKm(e.target.value)}/>
              <p>{Number(km).toLocaleString('fr-FR')} km</p>
            </div> {/*affiche 20 000 au lieu de 20000*/}
            <div className="choixAddContainer">
              <p>Type de carburant :</p>
              <select className="choixAdditionnels" defaultValue="Tous" onChange={(e) => setCarburant(e.target.value)}>
                <option value='Tous'>Tous</option>
                <option value='Essence'>Essence</option>
                <option value='Diesel'>Diesel</option>
                <option value='Électrique'>Électrique</option>
                <option value='Hybride'>Hybride</option>
              </select>
            </div>
            <div className="choixAddContainer">
              <p>Boite à vitesse :</p>
              <select className="choixAdditionnels" defaultValue="Toutes" onChange={(e) => setBoiteVitesse(e.target.value)}>
                <option value='Toutes' selected="selected">Toutes</option>
                <option value='Manuelle'>Manuelle</option>
                <option value='Automatique'>Automatique</option>
              </select>
            </div>
            <div className="choixAddContainer">
              <p>Couleur :</p>
              <select className="choixAdditionnels" defaultValue="Toutes" onChange={(e) => setCouleur(e.target.value)}>
                <option value='Toutes' selected="selected">Toutes</option>
                <option value='Noire'>Noire</option>
                <option value='Blanche'>Blanche</option>
                <option value='Rouge'>Rouge</option>
                <option value='Bleue'>Bleue</option>
                <option value='Jaune'>Jaune</option>
              </select>
            </div>
          </form>
        </div>
        <div id="voitures">
          {
            (voituresTriees.length === 0) && (
              <div id="resultatsVidesContainer">
                <div id="resultatsVides">
                  <p>Aucun résultat n'a été trouvé !</p>
                  <p>Veuillez revoir les critères.</p>
                </div>
              </div>
            )
          }
          {
            voituresTriees.slice(debutPage, finPage).map((valeur) => {
                return (
                  <div className='voiture' id={`voiture-${valeur.id}`} key={valeur.id}>
                    <p>{valeur.marque} {valeur.modele}</p>
                    <img src={valeur.lienImg} alt={`voiture ${valeur.marque} ${valeur.modele}`} />
                    <p><span>{valeur.prix} €</span></p>
                    <p>{valeur.km} km</p>
                    <p>{valeur.carburant}</p>
                    <p>{valeur.boiteVitesse}</p>
                    <p>{valeur.annee}</p>
                    {
                      voirPlusActif[valeur.id-1]===false && (
                        <button className="boutonVoir" onClick={() => (actionnerUnBouton(valeur.id))}>Voir plus</button>
                      )
                    }
                    {
                      voirPlusActif[valeur.id-1]===true && (
                          <div className="infosSup">
                            <p>{valeur.nbPlaces} places</p>
                            <p>{valeur.nbPortes} portes</p>
                            <p>Puissance fiscale : {valeur.puissFiscale} CV</p>
                            <p>Puissance DIN : {valeur.puissDIN} CH</p>
                            <p>Couleur : {valeur.couleur}</p>
                            <button className="boutonVoir" onClick={() => (actionnerUnBouton(valeur.id))}>Voir moins</button>
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
            {choixPages}
            <li><button onClick={() => avancerPage()}><i className="fa-solid fa-angles-right"></i></button></li>
          </ul>
        </div>
    </div>
  );
};

export default NosVoitures;