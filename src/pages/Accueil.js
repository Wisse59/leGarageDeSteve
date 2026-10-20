import Navigation from "../components/Navigation";
import visDecor from "../assets/img/visDecor.png";
import voituresOccasion from "../assets/json/voituresOccasion.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
    const [marquesDispo, setMarquesDispo] = useState([]);
    const [marqueChoisie, setMarqueChoisie] = useState('Audi');
    const [modelesDispo, setModelesDispo] = useState([]);
    const [modeleChoisi, setModeleChoisi] = useState('');
    const [rechercheAccueil, setRechercheAccueil] = useState([]);
    const [nbResultatsAccueil, setNbResultatsAccueil] = useState(0);
    const [prixAccueil, setPrixAccueil] = useState(15000);
    const [kmMaxAccueil, setKmMaxAccueil] = useState(250000);
    const [indexDebutCarousel, setIndexDebutCarousel] = useState(0);
    const [indexFinCarousel, setIndexFinCarousel] = useState(2);
    const [nbVoitures, setNbVoitures] = useState(voituresOccasion.length);
    //afin de ne pas recalculer la taille à chaque fois que la fleche est pressee

    useEffect(() => {
        setMarquesDispo(
            [...new Set(
                voituresOccasion.map((voiture) => voiture.marque)
                .sort((a, b) => a.localeCompare(b))
            )]
        );
    }, [])

    useEffect(() => {
        setModelesDispo(
            [...new Set(
                voituresOccasion.filter((voiture) => voiture.marque === marqueChoisie)
                .map((voiture) => voiture.modele)
            )]
        );
    }, [marqueChoisie])

    useEffect(() => {
        setModeleChoisi(modelesDispo[0]);
    }, [modelesDispo])

    useEffect(() => {
        setRechercheAccueil(
            voituresOccasion.filter((voiture) => 
                (voiture.marque === marqueChoisie) &&
                (voiture.modele === modeleChoisi) &&
                (voiture.prix <= prixAccueil) &&
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

    useEffect(() => {
        const defilementAuto = setInterval(() => {
            setIndexDebutCarousel((e) => e + 1);
            setIndexFinCarousel((e) => e + 1);
        }, 3000);

        //lorsque l'on quitte l'accueil
        return () => clearInterval(defilementAuto);
    }, [indexDebutCarousel]);

    useEffect(() => {
        if (indexFinCarousel >= nbVoitures) {
            setIndexDebutCarousel(0);
            setIndexFinCarousel(2); /*Retour de la fin au début*/
        }
    }, [indexFinCarousel]);

  return (
    <div className="accueil">
      <header>
          <div id="bgTitreAccueil">
              <Navigation />
              <div id="titreHeader">
                  <h1>Le Garage de Steve</h1>
                  <p><i className="fa-solid fa-car"></i></p>
                  <h4>Pour des services de qualité !</h4>
              </div>
          </div>    
      </header>
      <section id="reparation">
          <div id="repContainer">
              <div id="introRepContainer">
                  <div id="introRep">
                      <h4>Besoin d'un coup d'pneu ?</h4>
                  </div>
              </div>
              <div id="bullesRepContainer">
                  <div className="bulleRep">
                      <div className="textePresentation">
                          <p>Une réparation ?</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>Prendre RDV pour une réparation</p>
                          </div>
                          <div className="contenuBulle">
                              <p>Problème de carrosserie</p>
                              <p>Casse moteur</p>
                              <p>Voyants défectueux</p>
                              <p>Embrayage endommagé</p>
                              <p>Autre..</p>
                          </div>
                          <div className="psRep">
                              <p>Le prix dépend de la gravité des dégâts</p>
                          </div>
                      </div>
                  </div>
                  <div className="bulleRep">
                      <div className="textePresentation">
                          <p>Un lavage ?</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>Choisissez une formule de lavage.</p>
                          </div>
                          <div className="contenuBulle">
                              <p>Service minimum <span>2€</span></p>
                              <p>Service intermédiaire <span>8€</span></p>
                              <p>Service total <span>20€</span></p>
                              <p>Service intérieur + extérieur <span>35€</span></p>
                          </div>
                          <div className="psRep">
                              <p>(Ps : Faudra que je mette entre parenthèses ça + vitres + ça)</p>
                          </div>
                      </div>
                  </div>
                  <div className="bulleRep">
                      <div className="textePresentation">
                          <p>Une remise d'aplomb ?</p>
                      </div>
                      <div className="texteApprofondi">
                          <div className="titreBulle">
                              <p>Venez remettre d'aplomb votre voiture !</p>
                          </div>
                          <div className="contenuBulle">
                              <p>Remise d'huile</p>
                              <p>Recharge de batterie</p>
                              <p>Remise de produit à essuie-glace</p>
                              <p>La totale</p>
                          </div>
                          <div className="psRep">
                              <p>Le prix dépend de la quantité à ajouter, la vérification est gratuite.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="nouveautes">
          <h4>Nos dernières acquisitions</h4>
          <div id="nouvVoitures">
              <p onClick={() => {
                if (indexDebutCarousel > 0) {
                    setIndexDebutCarousel(indexDebutCarousel-1); setIndexFinCarousel(indexFinCarousel-1)
                } else {
                    setIndexDebutCarousel(nbVoitures-3); setIndexFinCarousel(nbVoitures-1)
                }
              }} className="cercleFleche"><i className="fa-solid fa-arrow-left"></i></p>

              <div id="fenetreCarousel">
                {/*toutes les voitures sont affichees mais l'excedent est cache (avec overflow: hidden)*/}
                <div id="railCarousel" style={{ transform: `translateX(-${indexDebutCarousel * (100/3)}%)` }}>
                {/*On defile d'un tiers à chaque fois que le no est incremente*/}
                    {voituresOccasion.map((voiture) => 
                        <div onClick={() => envoiCarousel(voiture.id)} className="nouvVoiture">
                            <p className="nouvVoitTitre">{voiture.marque} {voiture.modele}</p>
                            <img src={voiture.lienImg} alt={`voiture ${voiture.marque} ${voiture.modele}`} className="imgVoiture" />
                            <div className="nouvVoitDescr">
                                <p>{voiture.annee}</p>
                                <p>{voiture.carburant}</p>
                                <p>État : {voiture.etat}</p>
                                <p><span>{voiture.prix}</span></p>
                            </div>
                        </div>
                    )}
                </div>
              </div>

              <p onClick={() => {
                if (indexFinCarousel < nbVoitures) {
                    setIndexDebutCarousel(indexDebutCarousel+1); setIndexFinCarousel(indexFinCarousel+1)
                }
              }} className="cercleFleche"><i className="fa-solid fa-arrow-right"></i></p>
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis1" />
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis2" />
          </div>
      </section>
      <section id="trouverVoitureEtPresentation">
          <div id="trouverVoitureContainer">
              <h4>Trouvez votre voiture :</h4>
              <form action="rechVoiture" id="formRechVoiture" onSubmit={envoiRecherche}>
                  <label htmlFor="rechMarque">Marque : </label>
                  <select id="rechMarque" defaultValue='Audi' onChange={(e) => setMarqueChoisie(e.target.value)}>
                    {
                        marquesDispo.map((marque) => (
                            <option value={marque}>{marque}</option>
                        ))
                    }
                  </select>
                  <label htmlFor="rechModele">Modèle : </label>
                  <select id="rechModele" onChange={(e) => setModeleChoisi(e.target.value)}>
                    {
                        modelesDispo.map((modele) => (
                            <option value={modele}>{modele}</option>
                        ))
                    }
                  </select>
                  <label htmlFor="rechPrix">Prix : </label>
                  <div className="valeurEtDonneeAccueil">
                    <input type="range" id="rechPrix" min="2500" max="30000" value={prixAccueil} onChange={(e) => setPrixAccueil(e.target.value)}/>
                    <p>{prixAccueil}</p>
                  </div>
                  <label htmlFor="rechKm">Km max</label>
                  <div className="valeurEtDonneeAccueil">
                    <input type="range" id="rechKm" max="500000" value={kmMaxAccueil} onChange={(e) => setKmMaxAccueil(e.target.value)}/>
                    <p>{kmMaxAccueil}</p>
                  </div>
                  <button type="submit" id="boutonRechAccueil">Rechercher ({nbResultatsAccueil} résultats)</button>
                  <div id="plusCriteres">
                    <a href="/nos-voitures">Plus de critères disponibles ici.</a>
                  </div>
              </form>
          </div>
          <div id="presentation">
              <div id="presentationContainer">
                  <div id="imgPresentation"></div>
                  <p id="textePresentation">Réputé à Condé-sur-l'Escaut pour mes services de très bonne qualité et mes prix imbattables, je m'occupe de ce garage depuis de nombreuses années. À la différence des entreprises aux nombreuses agences qui s'étallent pour s'étendre dans un monde capitaliste. Je vérifie moi-même chaque voiture avant de vous les proposer en vente, chacune étant garrantie deux ans. Pour les réparations, tout le matériel et la plupart des pièces de rechange sont d'ores et déjà à disposition. Faites-moi également confiance pour un lavage au top ou une remise à plomb. Le Garage de Steve est là pour vous !</p>
                  <div id="infosGarage">
                      <div id="infosGauche">
                          <div className="contenuInfos">
                              <p><i className="fa-solid fa-location-dot"></i></p>
                              <p>17 Rue du cube</p>
                              <p>Condé-sur-l'Escaut (59163)</p>
                          </div>
                      </div>
                      <div id="infosDroite">
                          <div className="contenuInfos">
                              <p><i className="fa-solid fa-calendar-days"></i></p>
                              <p>Horaires :</p>
                              <div id="heures">
                                  <p>Lundi : 8h00-12h30 14h00-17h30</p>
                                  <p>Mardi : 8h00-12h30 14h00-17h30</p>
                                  <p>Mercredi : 8h00-12h</p>
                                  <p>Jeudi : 8h00-12h30 14h00-17h30</p>
                                  <p>Vendredi : 8h00-12h30 14h00-17h30</p>
                                  <p>Samedi : 8h00-12h30 14h00-17h30</p>
                                  <p id="ferme">Fermé le dimanche</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="fondFinal">
      </section>
      <footer>
          <div>
              <h5>Le garage de Steve</h5>
              <p id="descFooter"><span>“</span> Venez recevoir de l'aide en toute confiance. Expert depuis 2009, mes avis Google Maps parlent d'eux-même. Ici, chaque bijou est traité avec soin, et oui je parle bien de véhicules. <span>”</span></p>
              <p id="adresseFooter"><i className="fa-solid fa-location-dot"></i>17 rue du cube, Condé-sur-l'Escaut 59163</p>
          </div>
          <div className="interractif">
              <h6>Besoin d'aide ?</h6>
              <p>Nous contacter</p>
              <p>Questions fréquentes</p>
              <p><i className="fa-solid fa-ear-listen"></i> Assistance malentendants/surdité</p>
              <p>Signaler un problème</p>
              <p>Demander un devis</p>
          </div>
          <div className="interractif">
              <h6>En savoir plus</h6>
              <p>Mentions légales</p>
              <p>Nos engagements</p>
              <p>Cookies et vie privée</p>
              <p>Conditions générales</p>
              <p>Politique de confidentialité</p>
              <p>Accessibilité</p>
          </div>
          <div id="logosFooter">
              <h5 className="gris">Nous suivre</h5>
              <a href="https://www.facebook.com/profile.php?id=61595204774831"><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-x-twitter"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-tiktok"></i></a>
          </div>
      </footer>
    </div>
  );
};

export default Accueil;