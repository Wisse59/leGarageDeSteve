import { useEffect, useState } from 'react';
import Navigation from "../components/Navigation";

const RDV = () => {
    const [motif, setMotif] = useState('Aucun')
    const [service, setService] = useState('Aucun')
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
        ((horaireChoisie[0] === 11) && (horaireChoisie[1] > 40)))))
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
            <Navigation />
            <div id="rdvContainer">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (selectionOK === true) {
                        setDonneesFormulaire(Object.fromEntries(new FormData(e.target)));
                    }
                }} id="rdv">
                    <div className="sectionRDV">
                        <p id="introRDV">Prenez un rendez-vous !</p>
                    </div>
                    <div className="sectionRDV">
                        <p>Choississez une date</p>
                        <input id="jourRDV" type="date" name="jourForm" onChange={(e) => setJourChoisi(new Date(e.target.value).getDay())} defaultValue = {ajd} min = {ajd} required />
                    </div>
                    <div className="sectionRDV">
                        <div id="raisonRDV">
                            <div id="motifContainer1">
                                <p>Pour quel motif désirez-vous venir ?</p>
                                <select defaultValue='Aucun' name='motifForm' onChange={(e) => setMotif(e.target.value)}>
                                    <option value='Aucun'>Choississez un motif</option>
                                    <option value='Reparation'>Réparer un véhicule</option>
                                    <option value='Lavage'>Faire un lavage</option>
                                    <option value="Remise d'aplomb">Remettre d'aplomb ma voiture</option>
                                    <option value='Achat ou vente'>Achat/Vente de voiture</option>
                                </select>
                            </div>
                            {motif !== 'Aucun' &&
                                <div id="motifContainer2">
                                    <p>Choississez un type de service</p>
                                    {motif === 'Reparation' && (
                                        <select defaultValue='Aucun' name="reparationForm" onChange={(e) => setService(e.target.value)}> {/*cas de reparation*/}
                                            <option value='Aucun'>Choississez une réparation</option>
                                            <option value='Reparation carroserie'>Problème de carrosserie</option>
                                            <option value='Reparation moteur'>Casse moteur</option>
                                            <option value='Reparation voyants'>Voyants défectueux</option>
                                            <option value='Reparation embrayage'>Embrayage endommagé</option>
                                            <option value='Autre'>Autre..</option>
                                        </select>
                                    )}
                                    {motif === 'Lavage' && (
                                    <select defaultValue='Aucun' name="lavageForm" onChange={(e) => setService(e.target.value)}> {/*cas de lavage*/}
                                        <option value='Aucun'>Choississez un lavage</option>
                                        <option value='Lavage minimul'>Service minimum - Rinçage (2€)</option>
                                        <option value='Lavage intermediaire'>Service intermédiaire (8€)</option>
                                        <option value='Lavage total'>Service total (20€)</option>
                                        <option value='Lavage interieur et exterieur'>Service intérieur + extérieur (35€)</option>
                                    </select>
                                    )}
                                    {motif === "Remise d'aplomb" && (
                                    <select defaultValue='Aucun' name="aplombForm" onChange={(e) => setService(e.target.value)}> {/*cas de remise d'aplomb*/}
                                        <option value='Aucun'>Choississez un élément</option>
                                        <option value="Remise d'huile">Remise d'huile</option>
                                        <option value="Recharge de la batterie">Recharge de batterie</option>
                                        <option value='Remise de produit a essuie-glace'>Remise de produit à essuie-glace</option>
                                        <option value='Remise de produit liquide de frein'>Remise de liquide de frein</option>
                                        <option value="Remise d'aplomb totale">La totale</option>
                                    </select>
                                    )}
                                    {motif === 'Achat ou vente' && (
                                    <select defaultValue='Aucun' name="achat-venteForm" onChange={(e) => setService(e.target.value)}> {/*cas d'achat*/}
                                        <option value='Aucun'>Choississez un motif</option>
                                        <option value='Achat'>Un véhicule m'intéresse</option>
                                        <option value='Vente'>Je souhaite vendre mon véhicule</option>
                                        <option value='Autre'>Autre..</option>
                                    </select>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="sectionRDV">
                        <p>Choississez une horaire</p>
                        <input id="heureRDV" name="heureForm" type="time" defaultValue="08:00" onChange={(e) => setHoraireChoisie(e.target.value.split(":").map(Number))} required />

                    </div>
                    <div className="sectionRDV">
                        {(jourChoisi === 0) && (
                            <div className="msgErreurForm">
                                <p>Nous sommes fermé le dimanche,</p>
                                <p>Merci de choisir une autre date !</p>
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
                                <p>Nous sommes fermé à cette heure de la journée,</p>
                                <p>nos horaires sont disponibles à l'accueil !</p>
                            </div>
                        )}
                        {((((horaireChoisie[0] === 17) && (horaireChoisie[1] > 10)) || //20min avant la fermeture
                        ((horaireChoisie[0] === 12) && ((horaireChoisie[1] > 10) && (horaireChoisie[1] < 31))) || //20min avant la pause de midi
                        ((horaireChoisie[0] === 11) && (horaireChoisie[1] > 40))) && //20min avant la fermeture du mercredi
                        (jourChoisi !== 0) //le cas du dimanche est separe
                        ) && (
                            <div className="msgErreurForm">
                                <p>Vous avez choisi une heure à 20min de la fermeture,</p>
                                <p>merci de prendre rendez-vous plus tôt !</p>
                            </div>
                        )}
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RDV;