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