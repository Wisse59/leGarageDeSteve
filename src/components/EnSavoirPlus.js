import Navigation from "./Navigation";
import Footer from "./Footer";

const EnSavoirPlusFooter = () => {
    return (
        <div id="footerPageEnSavoirPlus">
            <Navigation />
            <div id="aideContainers">
                <h2 id="titrePageAide">En savoir plus</h2>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="mentionsLegales">Mentions légales</h3>
                    <p>Éditeur du site : Le Garage de Steve</p>
                    <p>Adresse : 17 rue du cube, Condé-sur-l'Escaut 59163</p>
                    <p>Téléphone : 07 54 05 77 66</p>
                    <p>Numéro de SIRET : 000 000 000 00000</p>
                    <p>Concepteur du site : Wissem H.</p>
                    <p>Hébergeur du site : Netlify</p>
                </div>

                <div className="aideContainer" id="nosEngagements">
                    <h3 className="sousTitrePageAide">Nos engagements</h3>
                    <p>Au garage de Steve, la qualité et la confiance les clés d'or de mes valeurs. Je m'engage à :</p>
                    <div className="petitEspace" />
                    <p>Ne jamais engager de frais supplémentaires sans accord préalable.</p>
                    <p>Utiliser des pièces de rechange de qualité et garanties.</p>
                    <p>Respecter les délais annoncés lors du dépôt de votre véhicule.</p>
                    <p>Recycler l'huile usagée et les pièces défectueuses dans le respect de l'environnement, dans la mesure du possible.</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="cookies">Cookies et vie privée</h3>
                    <p>Ce site utilise le strict minimum. Les seuls cookies que nous déposons servent au bon fonctionnement du site, notamment pour le système de prise de rendez-vous en ligne. Il n'y a pas de pubs et donc aucun ciblage publicitaire : vous êtes ici pour votre voiture, et non pas pour être traqué !</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="conditionsGenerales">Conditions générales</h3>
                    <p>Nos devis sont gratuits et valables 30 jours à compter de leur date d'émission. Toute réparation nécessite la signature préalable du devis. Un acompte peut vous être demandé pour la commande de pièces spécifiques. Les véhicules non récupérés 15 jours après la fin des travaux pourront faire l'objet de frais de gardiennage.</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="politiqueConfidentialite">Politique de confidentialité</h3>
                    <p>Les informations que vous nous confiez servent uniquement à la gestion de vos rendez-vous, l'envoi de vos devis et la facturation. Elles restent strictement entre vous et le garage de Steve et ne seront jamais revendues ou cédées à des tiers.</p>
                </div>

                <div className="aideContainer">
                    <h3 className="sousTitrePageAide" id="accessibilite">Accessibilité</h3>
                    <p>Le garage a été aménagé pour accueillir tout le monde dans les meilleures conditions. L'entrée, l'accueil et le bureau sont plats afin d'être totalement accessibles aux personnes à mobilité réduite et aux fauteuils roulants. De plus, comme mentionné dans la rubrique d'aide, je communique couramment en langue des signes française, les personnes malentendantes sont alors évidemment bienvenue.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EnSavoirPlusFooter;