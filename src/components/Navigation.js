import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/style.css';

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
                    <li id="titreNav">Le Garage de Steve</li>
                    <li>Prendre RDV</li>
                    <li>Actus</li>
                </ul>
                    <div id="langues">
                        <p id="langueNavbar"><i class="fa-solid fa-language"></i></p>
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