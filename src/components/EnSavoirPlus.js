import Navigation from "./Navigation";
import Footer from "./Footer";

const EnSavoirPlusFooter = ({ choixLangue, setChoixLangue, languesDispo }) => {
    return (
        <div id="footerPageEnSavoirPlus">
            <Navigation choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
            <div id="aideContainers">
                <h2 id="titrePageAide">{languesDispo[choixLangue][149].text}</h2>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="mentionsLegales">{languesDispo[choixLangue][150].text}</h3>
                    <p>{languesDispo[choixLangue][151].text}</p>
                    <p>{languesDispo[choixLangue][152].text}</p>
                    <p>{languesDispo[choixLangue][153].text}</p>
                    <p>{languesDispo[choixLangue][154].text}</p>
                    <p>{languesDispo[choixLangue][155].text}</p>
                    <p>{languesDispo[choixLangue][156].text}</p>
                    <p>{languesDispo[choixLangue][157].text}</p>
                </div>

                <div className="aideContainer" id="nosEngagements">
                    <h3 className="sousTitrePageAide">{languesDispo[choixLangue][158].text}</h3>
                    <p>{languesDispo[choixLangue][159].text}</p>
                    <div className="petitEspace" />
                    <p>{languesDispo[choixLangue][160].text}</p>
                    <p>{languesDispo[choixLangue][161].text}</p>
                    <p>{languesDispo[choixLangue][162].text}</p>
                    <p>{languesDispo[choixLangue][163].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="cookies">{languesDispo[choixLangue][164].text}</h3>
                    <p>{languesDispo[choixLangue][165].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="conditionsGenerales">{languesDispo[choixLangue][166].text}</h3>
                    <p>{languesDispo[choixLangue][167].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="politiqueConfidentialite">{languesDispo[choixLangue][168].text}</h3>
                    <p>{languesDispo[choixLangue][169].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="accessibilite">{languesDispo[choixLangue][170].text}</h3>
                    <p>{languesDispo[choixLangue][171].text}</p>
                </div>
            </div>
            <Footer choixLangue={choixLangue} languesDispo={languesDispo} />
        </div>
    )
}

export default EnSavoirPlusFooter;