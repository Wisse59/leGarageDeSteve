import Navigation from "./Navigation";
import Footer from "./Footer";

const AideFooter = () => {

    return (
        <div id="footerPageAide">
            <Navigation />
            <div id="aideContainers">
                <h2 id="titrePageAide">Besoin d'aide ?</h2>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="nousContacter">Nous contacter</h3>
                    <p>Nous sommes joignables aux coordonnées suivantes :</p>
                    <div className="petitEspace" />
                    <p>legaragedesteve@gmail.com</p>
                    <p>07 54 05 77 66</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="questionsFrequentes">Questions fréquentes</h3>
                    <p>➢ Les voitures possèdent-elles une garantie ?</p>
                    <p>Tous nos véhicules sont garantis deux ans à l'achat.</p>
                    <div className="petitEspace" />
                    <p>➢ Quels moyens de paiement sont acceptés ?</p>
                    <p>Nous acceptons les paiements par liquide et par carte bancaire.</p>
                    <p>Les chèques sont refusés suite à des problèmes rencontrés par le passé.</p>
                    <div className="petitEspace" />
                    <p>➢ Comment peut-on être prévenus des horaires imprévues ?</p>
                    <p>En cas de problème, une annonce est faite sur notre page Facebook.</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="assistanceMalentendants"><i className="fa-solid fa-ear-listen"></i> Assistance malentendants et surdité</h3>
                    <p>Je maitrise la langue des signes françaises (LSF), ma fille étant malentendante depuis la naissance. Vous pouvez donc venir sans soucis ni interprète au garage, tout le monde est bienvenue, on communiquera très bien ensemble !</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="signalerPblm">Signaler un problème</h3>
                    <p>Vous pouvez me contacter par mail aux <a href="#nousContacter">coordonnées suivantes.</a></p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="demanderDevis">Demander un devis</h3>
                    <p>Les devis sont envoyés automatiquement par mail à chaque prise de rendez-vous sur notre site et sont également imprimés et donnés en main propre avant chaque reparation ou achat de véhicule. En cas de perte, consultez simplement vos mail !</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AideFooter;