import { NavLink } from "react-router-dom";
import txtFR from "../assets/langages/txtFR.json";
import txtANG from "../assets/langages/txtANG.json";

const Navigation = () => {
    const choixLangue = 'FR';

    const langues = {
        FR: txtFR,
        ANG: txtANG
    };

    return (
        <div className="navigation">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>{langues[choixLangue][0].text}</li>
                    </NavLink>
                    <NavLink to="/nos-voitures" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>{langues[choixLangue][1].text}</li>
                    </NavLink>
                    <NavLink to="/" id="titreDissumulable" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li id="titreNav">{langues[choixLangue][2].text}</li>
                    </NavLink>
                    <NavLink to="/prendre-rdv" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>{langues[choixLangue][3].text}</li>
                    </NavLink>
                    <NavLink to="/actus" id ="a" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>{langues[choixLangue][4].text}</li>
                    </NavLink>
                </ul>
                    <div id="langues">
                        <p id="langueNavbar"><i className="fa-solid fa-language"></i></p>
                        <ul id="languesCachees">
                            <li>Français</li>
                            <li>English</li>
                            <li>Deutsch</li>
                            <li>Español</li>
                            <li>Italiano</li>
                        </ul>
                    </div>
            </nav>
        </div>
    );
};

export default Navigation;

/*Ma navbar avant l'ajout de langue

import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/nos-voitures" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Nos Voitures</li>
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li id="titreNav">Le Garage de Steve</li>
                    </NavLink>
                    <NavLink to="/prendre-rdv" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Prendre RDV</li>
                    </NavLink>
                    <NavLink to="/actus" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Actus</li>
                    </NavLink>
                </ul>
                    <div id="langues">
                        <p id="langueNavbar"><i className="fa-solid fa-language"></i></p>
                        <ul id="languesCachees">
                            <li>Français</li>
                            <li>English</li>
                            <li>Deutsch</li>
                            <li>Español</li>
                            <li>Italiano</li>
                        </ul>
                    </div>
            </nav>
        </div>
    );
};

export default Navigation;
*/