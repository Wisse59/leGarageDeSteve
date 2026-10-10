import React from "react";
import Navigation from "../components/Navigation";
import visDecor from "../assets/img/visDecor.png";

const Accueil = () => {
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
              <p className="cercleFleche"><i className="fa-solid fa-arrow-left"></i></p>
              <div className="nouvVoiture">
                  <p className="nouvVoitTitre">Toyota Camry</p>
                  <img src="https://carapi.trustcar.info/getImage?make=Toyota&model=Camry" alt="voiture Toyota Camry" className="imgVoiture" />
                  <div className="nouvVoitDescr">
                      <p>2009</p>
                      <p>Essence</p>
                      <p>État : Très Bon</p>
                      <p><span>7000€</span></p>
                  </div>
              </div>
              <div className="nouvVoiture">
                  <p className="nouvVoitTitre">Nissan Micra</p>
                  <img src="https://carapi.trustcar.info/getImage?make=Nissan&model=Micra" alt="voiture Nissan Micra" className="imgVoiture" />
                  <div className="nouvVoitDescr">
                      <p>2006</p>
                      <p>Essence</p>
                      <p>État : Neuf</p>
                      <p><span>5000€</span></p>
                  </div>
              </div>
              <div className="nouvVoiture">
                  <p className="nouvVoitTitre">Peugeot 207</p>
                  <img src="https://carapi.trustcar.info/getImage?make=Peugeot&model=207" alt="voiture Peugeot 207" className="imgVoiture" />
                  <div className="nouvVoitDescr">
                      <p>2007</p>
                      <p>Diesel</p>
                      <p>État : Bon</p>
                      <p><span>6000€</span></p>
                  </div>
              </div>
              <p className="cercleFleche"><i className="fa-solid fa-arrow-right"></i></p>
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis1" />
              <img src={visDecor} alt="une vis pour la deco" className="vis" id="vis2" />
          </div>
      </section>
      <section id="trouverVoitureEtPresentation">
          <div id="trouverVoitureContainer">
              <h4>Trouvez votre voiture :</h4>
              <form action="rechVoiture" id="formRechVoiture">
                  <label for="rechMarque">Marque : </label>
                  <select id="rechMarque">
                      <option value="Peugeot">Peugeot</option>
                      <option value="Renault">Renault</option>
                  </select>
                  <label for="rechModele">Modèle : </label>
                  <select id="rechModele">
                      <option value="Peugeot">Megane</option>
                      <option value="Renault">207</option>
                  </select>
                  <label for="rechPrix">Prix : </label>
                  <input type="range" id="rechPrix" max="80000" />
                  <label for="rechKm">Km max</label>
                  <input type="range" id="rechKm" max="350000" />
                  <button type="submit">Rechercher (X résultats)</button>
                  <p>(Plus de critères disponibles ici. à cliquer)</p>
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
              <p><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-x-twitter"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-tiktok"></i></p>
          </div>
      </footer>
    </div>
  );
};

export default Accueil;