import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RDV = ({ choixLangue, setChoixLangue, languesDispo }) => {
    const recevoir = useLocation();
    const { 
        motifAccueil,
        serviceAccueil
    } = recevoir.state || {};
    
    const [motif, setMotif] = useState(motifAccueil? motifAccueil : 'Aucun')
    const [service, setService] = useState(serviceAccueil? serviceAccueil : 'Aucun')
    const [jourChoisi, setJourChoisi] = useState(new Date().getDay())
    const [horaireChoisie, setHoraireChoisie] = useState([8, 0])
    const [selectionOK, setSelectionOk] = useState(false);

    useEffect(() => {
        if ((motif !== 'Aucun') && //si les motifs du RDV sont remplis
        (service !== 'Aucun') && 

        (jourChoisi !== 0) && //et que les horaires sont valides
        !(((horaireChoisie[0] < 8) ||
        (horaireChoisie[0] > 17) ||
        (horaireChoisie[0] === 13) ||
        ((jourChoisi === 3) && (horaireChoisie[0] > 11)))) && 
        !((((horaireChoisie[0] === 17) && (horaireChoisie[1] > 10)) ||
        ((horaireChoisie[0] === 12) && (horaireChoisie[1] > 10)) ||
        ((jourChoisi === 3) && (horaireChoisie[0] === 11) && (horaireChoisie[1] > 40)))))
        {
            setSelectionOk(true); //la selection est valide
        } else {
            setSelectionOk(false);
        }
    }, [jourChoisi, horaireChoisie, motif, service])

    const ajd = new Date().toISOString().split("T")[0];
    //on ne peut pas prendre de rdv avant aujourd'hui

    const [donneesFormulaire, setDonneesFormulaire] = useState({});

    useEffect(() => {
        //le champ heure est required, ça évite l'alerte au lancement de page
        donneesFormulaire.heureForm &&
            alert('Un rendez-vous a été enregistré pour le ' + donneesFormulaire.jourForm.split("-")[2] + "/" + donneesFormulaire.jourForm.split("-")[1] + "/" + donneesFormulaire.jourForm.split("-")[0] + " à " + horaireChoisie[0] + "h" + (horaireChoisie[1] < 10 ? "0" + horaireChoisie[1] : horaireChoisie[1]) + ".\nMotif : " + motif + "\nService choisi : " + service)
    }, [donneesFormulaire])

    return(
        <div className="pageRDV">
            <Navigation choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
            <div id="rdvContainer">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (selectionOK === true) {
                        setDonneesFormulaire(Object.fromEntries(new FormData(e.target)));
                    }
                }} id="rdv">
                    <div className="sectionRDV">
                        <p id="introRDV">{languesDispo[choixLangue][91].text}</p>
                    </div>
                    <div className="sectionRDV">
                        <p>{languesDispo[choixLangue][92].text}</p>
                        <input id="jourRDV" type="date" name="jourForm" onChange={(e) => setJourChoisi(new Date(e.target.value).getDay())} defaultValue = {ajd} min = {ajd} required />
                    </div>
                    <div className="sectionRDV">
                        <div id="raisonRDV">
                            <div id="motifContainer1">
                                <p>{languesDispo[choixLangue][93].text}</p>
                                <select defaultValue={motif} name='motifForm' onChange={(e) => setMotif(e.target.value)}>
                                    <option value='Aucun'>{languesDispo[choixLangue][94].text}</option>
                                    <option value='Reparation'>{languesDispo[choixLangue][95].text}</option>
                                    <option value='Lavage'>{languesDispo[choixLangue][96].text}</option>
                                    <option value="Remise d'aplomb">{languesDispo[choixLangue][97].text}</option>
                                    <option value='Achat ou vente'>{languesDispo[choixLangue][98].text}</option>
                                </select>
                            </div>
                            {motif !== 'Aucun' &&
                                <div id="motifContainer2">
                                    <p>{languesDispo[choixLangue][99].text}</p>
                                    {motif === 'Reparation' && (
                                        <select defaultValue={service} name="reparationForm" onChange={(e) => setService(e.target.value)}> {/*cas de reparation*/}
                                            <option value='Aucun'>{languesDispo[choixLangue][100].text}</option>
                                            <option value='Reparation carroserie'>{languesDispo[choixLangue][101].text}</option>
                                            <option value='Reparation moteur'>{languesDispo[choixLangue][102].text}</option>
                                            <option value='Reparation voyants'>{languesDispo[choixLangue][103].text}</option>
                                            <option value='Reparation embrayage'>{languesDispo[choixLangue][104].text}</option>
                                            <option value='Autre'>{languesDispo[choixLangue][105].text}</option>
                                        </select>
                                    )}
                                    {motif === 'Lavage' && (
                                    <select defaultValue={service} name="lavageForm" onChange={(e) => setService(e.target.value)}> {/*cas de lavage*/}
                                        <option value='Aucun'>{languesDispo[choixLangue][106].text}</option>
                                        <option value='Lavage minimum'>{languesDispo[choixLangue][107].text}</option>
                                        <option value='Lavage intermediaire'>{languesDispo[choixLangue][108].text}</option>
                                        <option value='Lavage total'>{languesDispo[choixLangue][109].text}</option>
                                        <option value='Lavage interieur et exterieur'>{languesDispo[choixLangue][110].text}</option>
                                    </select>
                                    )}
                                    {motif === "Remise d'aplomb" && (
                                    <select defaultValue={service} name="aplombForm" onChange={(e) => setService(e.target.value)}> {/*cas de remise d'aplomb*/}
                                        <option value='Aucun'>{languesDispo[choixLangue][111].text}</option>
                                        <option value="Remise d'huile">{languesDispo[choixLangue][112].text}</option>
                                        <option value="Recharge de la batterie">{languesDispo[choixLangue][113].text}</option>
                                        <option value='Remise de produit a essuie-glace'>{languesDispo[choixLangue][114].text}</option>
                                        <option value='Remise de produit liquide de frein'>{languesDispo[choixLangue][115].text}</option>
                                        <option value="Remise d'aplomb totale">{languesDispo[choixLangue][116].text}</option>
                                    </select>
                                    )}
                                    {motif === 'Achat ou vente' && (
                                    <select defaultValue={service} name="achat-venteForm" onChange={(e) => setService(e.target.value)}> {/*cas d'achat*/}
                                        <option value='Aucun'>{languesDispo[choixLangue][117].text}</option>
                                        <option value='Achat'>{languesDispo[choixLangue][118].text}</option>
                                        <option value='Vente'>{languesDispo[choixLangue][119].text}</option>
                                        <option value='Autre'>{languesDispo[choixLangue][105].text}</option>
                                    </select>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="sectionRDV">
                        <p>{languesDispo[choixLangue][120].text}</p>
                        <input id="heureRDV" name="heureForm" type="time" defaultValue="08:00" onChange={(e) => setHoraireChoisie(e.target.value.split(":").map(Number))} required />

                    </div>
                    <div className="sectionRDV">
                        {(jourChoisi === 0) && (
                            <div className="msgErreurForm">
                                <p>{languesDispo[choixLangue][121].text}</p>
                                <p>{languesDispo[choixLangue][122].text}</p>
                            </div>
                        )}
                        {(((horaireChoisie[0] < 8) || //avant 8h
                        (horaireChoisie[0] > 17) || //apres 17h
                        (horaireChoisie[0] === 13) || //pause du midi
                        ((horaireChoisie[0] === 12) && (horaireChoisie[1] > 30)) ||
                        ((jourChoisi === 3) && (horaireChoisie[0] > 11))) && //horaires du mercredi
                        (jourChoisi !== 0) //le cas du dimanche est separe
                        ) && (
                            <div className="msgErreurForm">
                                <p>{languesDispo[choixLangue][123].text}</p>
                                <p>{languesDispo[choixLangue][124].text}</p>
                            </div>
                        )}
                        {((((horaireChoisie[0] === 17) && (horaireChoisie[1] > 10)) || //20min avant la fermeture
                        ((horaireChoisie[0] === 12) && ((horaireChoisie[1] > 10) && (horaireChoisie[1] < 31))) || //20min avant la pause de midi
                        ((jourChoisi === 3) && (horaireChoisie[0] === 11) && (horaireChoisie[1] > 40))) && //20min avant la fermeture du mercredi
                        (jourChoisi !== 0) //le cas du dimanche est separe
                        ) && (
                            <div className="msgErreurForm">
                                <p>{languesDispo[choixLangue][125].text}</p>
                                <p>{languesDispo[choixLangue][126].text}</p>
                            </div>
                        )}
                        <button type="submit">{languesDispo[choixLangue][127].text}</button>
                    </div>
                </form>
            </div>
            <Footer choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
        </div>
    )
}

export default RDV;