import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = ({ choixLangue, setChoixLangue, languesDispo }) => {
    const [sidebarOuverte, setSidebarOuverte] = useState(false);

    return (
        <div className="navigation">
            <nav>
                <div id="sidebarReponsive"> {/*pour les mobiles*/}
                    <div className="toggle-btn" id="btn">
                        <span onClick={() => sidebarOuverte? setSidebarOuverte(false) : setSidebarOuverte(true)} style={{transform: sidebarOuverte ? 'rotate(45deg) translate(68px, -52px)' : 'rotate(0deg) translateX(0px)'}}></span>
                        <span onClick={() => sidebarOuverte? setSidebarOuverte(false) : setSidebarOuverte(true)} style={{transform: sidebarOuverte ? 'rotate(-45deg) translate(60px, 60px)' : 'rotate(0deg) translateX(0px)'}}></span>
                        <span onClick={() => sidebarOuverte? setSidebarOuverte(false) : setSidebarOuverte(true)} style={{ opacity: sidebarOuverte ? 0 : 1, transition: 'none' }}></span>
                    </div>
                    <ul style={{ transform: sidebarOuverte ? 'translateX(0px)' : 'translateX(-150px)'}}>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>{languesDispo[choixLangue][0].text}</li>
                        </NavLink>
                        <NavLink to="/nos-voitures" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>{languesDispo[choixLangue][1].text}</li>
                        </NavLink>
                        <NavLink to="/" id="titreDissumulable" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li id="titreNav">{languesDispo[choixLangue][2].text}</li>
                        </NavLink>
                        <NavLink to="/prendre-rdv" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>{languesDispo[choixLangue][3].text}</li>
                        </NavLink>
                        <NavLink to="/actus" id ="a" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>{languesDispo[choixLangue][4].text}</li>
                        </NavLink>
                    </ul>
                </div>
            <div id="langues">
                <p id="langueNavbar"><i className="fa-solid fa-language"></i></p>
                <ul id="languesCachees">
                    <li onClick={() => setChoixLangue('FR')}>Français</li>
                    <li onClick={() => setChoixLangue('ANG')}>English</li>
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