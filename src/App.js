import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accueil from "./pages/Accueil";
import NosVoitures from "./pages/nosVoitures";
import RDV from "./pages/RDV";
import Actus from "./pages/Actus";
import AideFooter from "./components/AideFooter";
import EnSavoirPlusFooter from "./components/EnSavoirPlus";
import txtFR from "./assets/json/langages/txtFR.json";
import txtANG from "./assets/json/langages/txtANG.json";
import txtDE from "./assets/json/langages/txtDE.json";
import txtESP from "./assets/json/langages/txtESP.json";
import txtITA from "./assets/json/langages/txtITA.json";

function App() {
  //variable globale, pour ne l'afficher qu'une fois peu importe la page
  const [afficherPopUp, setAfficherPopUp] = useState(true);
  const [choixLangue, setChoixLangue] = useState('FR');
  const languesDispo = {
    FR: txtFR,
    ANG: txtANG,
    DE: txtDE,
    ESP: txtESP,
    ITA: txtITA
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="/nos-voitures" element={<NosVoitures
          afficherPopUp={afficherPopUp} setAfficherPopUp={setAfficherPopUp}
          choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="/prendre-rdv" element={<RDV choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="/actus" element={<Actus choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="/besoin-aide" element={<AideFooter choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="/en-savoir-plus" element={<EnSavoirPlusFooter choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
          <Route path="*" element={<Accueil choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;