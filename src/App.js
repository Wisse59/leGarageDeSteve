import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NosVoitures from "./pages/nosVoitures";
import RDV from "./pages/RDV"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/nos-voitures" element={<NosVoitures />} />
          <Route path="/prendre-rdv" element={<RDV />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;