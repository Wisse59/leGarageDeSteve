import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
      <footer>
          <div id="footerHautResponsive">
              <h5>Le garage de Steve</h5>
              <p id="descFooter"><span>“</span> Venez recevoir de l'aide en toute confiance. Expert depuis 2009, mes avis Google Maps parlent d'eux-même. Ici, chaque bijou est traité avec soin, et oui je parle bien de véhicules. <span>”</span></p>
              <p id="adresseFooter"><i className="fa-solid fa-location-dot"></i>17 rue du cube, Condé-sur-l'Escaut 59163</p>
          </div>
          <div id="footerBasResponsive">
            <div className="interractif">
                <h6>Besoin d'aide ?</h6>
                <HashLink smooth to="/besoin-aide#nousContacter">
                  <p>Nous contacter</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#questionsFrequentes">
                  <p>Questions fréquentes</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#assistanceMalentendants">
                  <p><i className="fa-solid fa-ear-listen"></i> Assistance malentendants/surdité</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#signalerPblm">
                  <p>Signaler un problème</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#demanderDevis">
                  <p>Demander un devis</p>
                </HashLink>
            </div>
            <div className="interractif">
                <h6>En savoir plus</h6>
                <HashLink smooth to="/en-savoir-plus#mentionsLegales">
                  <p>Mentions légales</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#nosEngagements">
                  <p>Nos engagements</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#cookies">
                  <p>Cookies et vie privée</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#conditionsGenerales">
                  <p>Conditions générales</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#politiqueConfidentialite">
                  <p>Politique de confidentialité</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#accessibilite">
                  <p>Accessibilité</p>
                </HashLink>
            </div>
            <div id="logosFooter">
                <h5 className="gris">Nous suivre</h5>
                <a href="https://www.facebook.com/profile.php?id=61595868208890"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://x.com"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
      </footer>
    );
};

export default Footer;