import Navigation from "./Navigation";
import Footer from "./Footer";

const AideFooter = ({ choixLangue, setChoixLangue, languesDispo }) => {

    return (
        <div id="footerPageAide">
            <Navigation choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
            <div id="aideContainers">
                <h2 id="titrePageAide">{languesDispo[choixLangue][129].text}</h2>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="nousContacter">{languesDispo[choixLangue][130].text}</h3>
                    <p>{languesDispo[choixLangue][131].text}</p>
                    <div className="petitEspace" />
                    <p>{languesDispo[choixLangue][132].text}</p>
                    <p>{languesDispo[choixLangue][133].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="questionsFrequentes">{languesDispo[choixLangue][134].text}</h3>
                    <p>➢ {languesDispo[choixLangue][135].text}</p>
                    <p>{languesDispo[choixLangue][136].text}</p>
                    <div className="petitEspace" />
                    <p>➢ {languesDispo[choixLangue][137].text}</p>
                    <p>{languesDispo[choixLangue][138].text}</p>
                    <p>{languesDispo[choixLangue][139].text}</p>
                    <div className="petitEspace" />
                    <p>➢ {languesDispo[choixLangue][140].text}</p>
                    <p>{languesDispo[choixLangue][141].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="assistanceMalentendants"><i className="fa-solid fa-ear-listen"></i>{languesDispo[choixLangue][142].text}</h3>
                    <p>{languesDispo[choixLangue][143].text}</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="signalerPblm">{languesDispo[choixLangue][144].text}</h3>
                    <p>{languesDispo[choixLangue][145].text}<a href="#nousContacter">{languesDispo[choixLangue][146].text}</a></p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="demanderDevis">{languesDispo[choixLangue][147].text}</h3>
                    <p>{languesDispo[choixLangue][148].text}</p>
                </div>
            </div>
            <Footer choixLangue={choixLangue} setChoixLangue={setChoixLangue} languesDispo={languesDispo} />
        </div>
    )
}

export default AideFooter;