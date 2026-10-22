import '../styles/style.css';

const Footer = () => {
    return (
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
    );
};

export default Footer;