import { HashLink } from "react-router-hash-link";

const Footer = ({ choixLangue, languesDispo }) => {
    return (
      <footer>
          <div id="footerHautResponsive">
              <h5>{languesDispo[choixLangue][3].text}</h5>
              <p id="descFooter"><span>“</span> {languesDispo[choixLangue][172].text} <span>”</span></p>
              <p id="adresseFooter"><i className="fa-solid fa-location-dot"></i>{languesDispo[choixLangue][173].text}</p>
          </div>
          <div id="footerBasResponsive">
            <div className="interractif">
                <h6>{languesDispo[choixLangue][174].text}</h6>
                <HashLink smooth to="/besoin-aide#nousContacter">
                  <p>{languesDispo[choixLangue][175].text}</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#questionsFrequentes">
                  <p>{languesDispo[choixLangue][176].text}</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#assistanceMalentendants">
                  <p><i className="fa-solid fa-ear-listen"></i>{languesDispo[choixLangue][177].text}</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#signalerPblm">
                  <p>{languesDispo[choixLangue][178].text}</p>
                </HashLink>
                <HashLink smooth to="/besoin-aide#demanderDevis">
                  <p>{languesDispo[choixLangue][179].text}</p>
                </HashLink>
            </div>
            <div className="interractif">
                <h6>{languesDispo[choixLangue][180].text}</h6>
                <HashLink smooth to="/en-savoir-plus#mentionsLegales">
                  <p>{languesDispo[choixLangue][181].text}</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#nosEngagements">
                  <p>{languesDispo[choixLangue][182].text}</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#cookies">
                  <p>{languesDispo[choixLangue][183].text}</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#conditionsGenerales">
                  <p>{languesDispo[choixLangue][184].text}</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#politiqueConfidentialite">
                  <p>{languesDispo[choixLangue][185].text}</p>
                </HashLink>
                <HashLink smooth to="/en-savoir-plus#accessibilite">
                  <p>{languesDispo[choixLangue][186].text}</p>
                </HashLink>
            </div>
            <div id="logosFooter">
                <h5 className="gris">{languesDispo[choixLangue][187].text}</h5>
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