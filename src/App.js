import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accueil from "./pages/Accueil";
import NosVoitures from "./pages/nosVoitures";
import RDV from "./pages/RDV";
import Actus from "./pages/Actus";
import AideFooter from "./components/AideFooter";
import EnSavoirPlusFooter from "./components/EnSavoirPlus";

function App() {
  //variable globale, pour ne l'afficher qu'une fois peu importe la page
  const [afficherPopUp, setAfficherPopUp] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/nos-voitures" element={<NosVoitures afficherPopUp={afficherPopUp} setAfficherPopUp={setAfficherPopUp} />} />
          <Route path="/prendre-rdv" element={<RDV />} />
          <Route path="/actus" element={<Actus />} />
          <Route path="/besoin-aide" element={<AideFooter />} />
          <Route path="/en-savoir-plus" element={<EnSavoirPlusFooter />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;