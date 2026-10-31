import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import visDecor from "../assets/img/visDecor.png";
import voituresOccasionFR from "../assets/json/langages/voituresOccasionFR.json";
import voituresOccasionANG from "../assets/json/langages/voituresOccasionANG.json";
import voituresOccasionDE from "../assets/json/langages/voituresOccasionDE.json";
import voituresOccasionESP from "../assets/json/langages/voituresOccasionESP.json";
import voituresOccasionITA from "../assets/json/langages/voituresOccasionITA.json";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Accueil = ({ choixLangue, setChoixLangue, languesDispo }) => {    
    const [marquesDispo, setMarquesDispo] = useState([]);
    const [marqueChoisie, setMarqueChoisie] = useState('Clio');
    const [modelesDispo, setModelesDispo] = useState([]);
    const [modeleChoisi, setModeleChoisi] = useState('');
    const [rechercheAccueil, setRechercheAccueil] = useState([]);
    const [nbResultatsAccueil, setNbResultatsAccueil] = useState(0);
    const [prixAccueil, setPrixAccueil] = useState(15000);
    const [kmMaxAccueil, setKmMaxAccueil] = useState(250000);
    const [indexDebutCarousel, setIndexDebutCarousel] = useState(0);
    const [indexFinCarousel, setIndexFinCarousel] = useState(2);
    //afin de ne pas recalculer la taille à chaque fois que la fleche est pressee
    const maxNouvVoitures = 20; //on limite les nouveautes a 20 voitures
    const [trioActif, setTrioActif] = useState(0);
    const refTrioActif = useRef(trioActif);

    const languesOccas = { //pour la langue de la BDD json
        FR: voituresOccasionFR,
        ANG: voituresOccasionANG,
        DE: voituresOccasionDE,
        ESP: voituresOccasionESP,
        ITA: voituresOccasionITA
    };

    useEffect(() => {
        setMarquesDispo(
            [...new Set(
                languesOccas[choixLangue].map((voiture) => voiture.marque)
                .sort((a, b) => a.localeCompare(b))
            )]
        );
    }, [])

    useEffect(() => {
        setModelesDispo(
            [...new Set(
                languesOccas[choixLangue].filter((voiture) => voiture.marque === marqueChoisie)
                .map((voiture) => voiture.modele)
            )]
        );
    }, [marqueChoisie])

    useEffect(() => {
        setModeleChoisi(modelesDispo[0]);
    }, [modelesDispo])

    useEffect(() => {
        //les prix de la page "nos voitures" sont par tranche (2500, 3000...)
        let prixArrondi;

        if (prixAccueil < 3000) {
            prixArrondi = prixAccueil - (prixAccueil % 500)
        } else if (prixAccueil < 10000) {
            prixArrondi = prixAccueil - (prixAccueil % 1000)
        } else if (prixAccueil < 30000) {
            prixArrondi = prixAccueil - (prixAccueil % 10000)
        } else {
            prixArrondi = 30000
        }
        
        setRechercheAccueil(
            languesOccas[choixLangue].filter((voiture) => 
                (voiture.marque === marqueChoisie) &&
                (voiture.modele === modeleChoisi) &&
                (voiture.prix <= prixArrondi) &&
                (voiture.km <= kmMaxAccueil))
                .map((voiture) => voiture.marque + " " + voiture.modele)
        );
    }, [marqueChoisie, modeleChoisi, prixAccueil, kmMaxAccueil])

    useEffect(() => {
        setNbResultatsAccueil(rechercheAccueil.length)
    }, [rechercheAccueil])

    const naviguer = useNavigate()

    const envoiRecherche = (e) => {
        e.preventDefault();
        naviguer('/nos-voitures', {
            state: {
                marqueChoisie,
                modeleChoisi,
                prixAccueil,
                kmMaxAccueil
            }
        });
    }

    function envoiCarousel(i) {
        const carouselEstActif = true;
        const noVC = i;

        naviguer('/nos-voitures', {
            state: {
                noVC,
                carouselEstActif
            }
        });
    }

    function envoiRDV(motif, service) {
        const motifAccueil = motif;
        const serviceAccueil = service;

        naviguer('/prendre-rdv', {
            state: {
                motifAccueil,
                serviceAccueil
            }
        });
    }

    useEffect(() => {
        const defilementAuto = setInterval(() => {
            setIndexDebutCarousel((e) => e + 1);
            setIndexFinCarousel((e) => e + 1);
        }, 3000);

        //lorsque l'on quitte l'accueil
        return () => clearInterval(defilementAuto);
    }, [indexDebutCarousel]);

    useEffect(() => {
        if (indexFinCarousel >= 20) {
            setIndexDebutCarousel(0);
            setIndexFinCarousel(2); /*Retour de la fin au début*/
        }
    }, [indexFinCarousel]);    

    const [empecherClicTrio, setEmpecherClicTrio] = useState(true);

    useEffect(() => {
        if (trioActif === 0) {
            setEmpecherClicTrio(true);
        } //pas de clic si texteAppronfondi n'est pas selectionne
        if (refTrioActif.current !== trioActif) {
            setEmpecherClicTrio(true); //pas de clic tant que ça deroule
            setTimeout(() => {
                setEmpecherClicTrio(false);
            }, 500)
        }
    }, [trioActif])

  return (
    <div className="accueil">
      <header>
          <div id="bgTitreAccueil">
              <Navigation choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
              <div id="titreHeader">
                  <h1>{languesDispo[choixLangue][5].text}</h1>
                  <p><i className="fa-solid fa-car"></i></p>
                  <h4>{languesDispo[choixLangue][6].text}</h4>
              </div>
          </div>    
      </header>
      <section id="reparation">
          <div id="repContainer">
              <div id="introRepContainer">
                  <div id="introRep">
                      <h4>{languesDispo[choixLangue][7].text}</h4>
                  </div>
              </div>
              <div id="bullesRepContainer">
                  <div className="bulleRep" onClick={() => setTrioActif(1)} onMouseEnter={() => setTrioActif(1)} onMouseLeave={() => setTrioActif(0)}>
                      <div className="textePresentation">
                          <p>{languesDispo[choixLangue][8].text}</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>{languesDispo[choixLangue][9].text}</p>
                          </div>
                          <div className="contenuBulle">
                            <p onClick={() => ((trioActif === 1) && !empecherClicTrio) && envoiRDV('Reparation', 'Reparation carroserie')}>{languesDispo[choixLangue][10].text}</p>
                            <p onClick={() => ((trioActif === 1) && !empecherClicTrio) && envoiRDV('Reparation', 'Reparation moteur')}>{languesDispo[choixLangue][11].text}</p>
                            <p onClick={() => ((trioActif === 1) && !empecherClicTrio) && envoiRDV('Reparation', 'Reparation voyants')}>{languesDispo[choixLangue][12].text}</p>
                            <p onClick={() => ((trioActif === 1) && !empecherClicTrio) && envoiRDV('Reparation', 'Reparation embrayage')}>{languesDispo[choixLangue][13].text}</p>
                            <p onClick={() => ((trioActif === 1) && !empecherClicTrio) && envoiRDV('Reparation', 'Autre')}>{languesDispo[choixLangue][14].text}</p>
                          </div>
                          <div className="psRep">
                              <p>{languesDispo[choixLangue][15].text}</p>
                          </div>
                      </div>
                  </div>
                  <div className="bulleRep" onClick={() => setTrioActif(2)} onMouseEnter={() => setTrioActif(2)} onMouseLeave={() => setTrioActif(0)}>
                      <div className="textePresentation">
                          <p>{languesDispo[choixLangue][16].text}</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>{languesDispo[choixLangue][17].text}</p>
                          </div>
                          <div className="contenuBulle">
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV('Lavage', 'Lavage minimum')}>{languesDispo[choixLangue][18].text}<span>{languesDispo[choixLangue][19].text}</span></p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV('Lavage', 'Lavage intermediaire')}>{languesDispo[choixLangue][20].text}<span>{languesDispo[choixLangue][21].text}</span></p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV('Lavage', 'Lavage total')}>{languesDispo[choixLangue][22].text}<span>{languesDispo[choixLangue][23].text}</span></p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV('Lavage', 'Lavage interieur et exterieur')}>{languesDispo[choixLangue][24].text}<span>{languesDispo[choixLangue][25].text}</span></p>
                          </div>
                      </div>
                  </div>
                  <div className="bulleRep" onClick={() => setTrioActif(3)} onMouseEnter={() => setTrioActif(3)} onMouseLeave={() => setTrioActif(0)}>
                      <div className="textePresentation">
                          <p>{languesDispo[choixLangue][26].text}</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>{languesDispo[choixLangue][27].text}</p>
                          </div>
                          <div className="contenuBulle">
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV("Remise d'aplomb", "Remise d'huile")}>{languesDispo[choixLangue][28].text}</p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV("Remise d'aplomb", "Recharge de la batterie")}>{languesDispo[choixLangue][29].text}</p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV("Remise d'aplomb", "Remise de produit a essuie-glace")}>{languesDispo[choixLangue][30].text}</p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV("Remise d'aplomb", "Remise de produit liquide de frein")}>{languesDispo[choixLangue][31].text}</p>
                            <p onClick={() => ((trioActif === 2) && !empecherClicTrio) && envoiRDV("Remise d'aplomb", "Remise d'aplomb totale")}>{languesDispo[choixLangue][32].text}</p>
                          </div>
                          <div className="psRep">
                              <p>{languesDispo[choixLangue][33].text}</p>
                              <p>{languesDispo[choixLangue][34].text}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="nouveautes">
          <h4>{languesDispo[choixLangue][35].text}</h4>
          <div id="nouvVoitures">
              <p onClick={() => {
                if (indexDebutCarousel > 0) {
                    setIndexDebutCarousel(indexDebutCarousel-1); setIndexFinCarousel(indexFinCarousel-1)
                } else {
                    setIndexDebutCarousel(maxNouvVoitures-3); setIndexFinCarousel(maxNouvVoitures-1)
                }
              }} className="cercleFleche"><i className="fa-solid fa-arrow-left"></i></p>

              <div id="fenetreCarousel">
                {/*toutes les voitures sont affichees mais l'excedent est cache (avec overflow: hidden)*/}
                <div id="railCarousel" 
                style={{ transform: (window.innerWidth < 433) ? `translateX(-${indexDebutCarousel * (100/2)}%)` : `translateX(-${indexDebutCarousel * (100/3)}%)` }}
                >
                {/*On defile d'un tiers à chaque fois que le no est incremente*/}
                    {languesOccas[choixLangue].map((voiture) => 
                        <div key={voiture.id} onClick={() => envoiCarousel(voiture.id)} className="nouvVoiture">
                            <p className="nouvVoitTitre">{voiture.marque} {voiture.modele}</p>
                            <img src={voiture.lienImg} alt={`voiture ${voiture.marque} ${voiture.modele}`} className="imgVoiture" />
                            <div className="nouvVoitDescr">
                                <p>{voiture.annee}</p>
                                <p>{voiture.carburant}</p>
                                <p>{languesDispo[choixLangue][36].text}{voiture.etat}</p>
                                <p><span>{voiture.prix}{languesDispo[choixLangue][37].text}</span></p>
                            </div>
                        </div>
                    )}
                </div>
              </div>

              <p onClick={() => {
                if (indexFinCarousel < maxNouvVoitures) {
                    setIndexDebutCarousel(indexDebutCarousel+1); setIndexFinCarousel(indexFinCarousel+1)
                }
              }} className="cercleFleche"><i className="fa-solid fa-arrow-right"></i></p>
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis1" />
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis2" />
          </div>
      </section>
      <section id="trouverVoitureEtPresentation">
          <div id="trouverVoitureContainer">
              <div id="fondParchemin"></div>
              <h4>{languesDispo[choixLangue][38].text}</h4>
              <form action="rechVoiture" id="formRechVoiture" onSubmit={envoiRecherche}>
                  <label htmlFor="rechMarque">{languesDispo[choixLangue][39].text}</label>
                  <select id="rechMarque" defaultValue='Audi' onChange={(e) => setMarqueChoisie(e.target.value)}>
                    {
                        marquesDispo.map((marque) => (
                            <option key={marque} value={marque}>{marque}</option>
                        ))
                    }
                  </select>
                  <label htmlFor="rechModele">{languesDispo[choixLangue][40].text}</label>
                  <select id="rechModele" onChange={(e) => setModeleChoisi(e.target.value)}>
                    {
                        modelesDispo.map((modele) => (
                            <option key={modele} value={modele}>{modele}</option>
                        ))
                    }
                  </select>
                  <label htmlFor="rechPrix">{languesDispo[choixLangue][41].text}</label>
                  <div className="valeurEtDonneeAccueil">
                    <input type="range" id="rechPrix" min="2500" max="30000" value={prixAccueil} onChange={(e) => setPrixAccueil(e.target.value)}/>
                    <p>{prixAccueil}</p>
                  </div>
                  <label htmlFor="rechKm">{languesDispo[choixLangue][42].text}</label>
                  <div className="valeurEtDonneeAccueil">
                    <input type="range" id="rechKm" max="500000" value={kmMaxAccueil} onChange={(e) => setKmMaxAccueil(e.target.value)}/>
                    <p>{kmMaxAccueil}</p>
                  </div>
                  <button type="submit" id="boutonRechAccueil">{languesDispo[choixLangue][43].text}{nbResultatsAccueil}{languesDispo[choixLangue][44].text}</button>
                  <div id="plusCriteres">
                    <a href="/nos-voitures">{languesDispo[choixLangue][45].text}</a>
                  </div>
              </form>
          </div>
          <div id="presentation">
              <div id="presentationContainer">
                  <div id="imgPresentation"></div>
                  <p id="textePresent">{languesDispo[choixLangue][46].text}</p>
                  <div id="infosGarage">
                      <div id="infosGauche">
                          <div className="contenuInfos">
                              <p><i className="fa-solid fa-location-dot"></i></p>
                              <p>{languesDispo[choixLangue][47].text}</p>
                              <p>{languesDispo[choixLangue][48].text}</p>
                          </div>
                      </div>
                      <div id="infosDroite">
                          <div className="contenuInfos">
                              <p><i className="fa-solid fa-calendar-days"></i></p>
                              <p>{languesDispo[choixLangue][49].text}</p>
                              <div id="heures">
                                  <p>{languesDispo[choixLangue][50].text}</p>
                                  <p>{languesDispo[choixLangue][51].text}</p>
                                  <p>{languesDispo[choixLangue][52].text}</p>
                                  <p>{languesDispo[choixLangue][53].text}</p>
                                  <p>{languesDispo[choixLangue][54].text}</p>
                                  <p>{languesDispo[choixLangue][55].text}</p>
                                  <p id="ferme">{languesDispo[choixLangue][56].text}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="fondFinal">
      </section>
      <Footer choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
    </div>
  );
};

export default Accueil;