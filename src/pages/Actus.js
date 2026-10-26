import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";

function Actus() {
  const [dataActus, setDataActus] = useState([]);

  useEffect(() => {
    axios //recuperation de mon API Meta Graph de Facebook dans une fonction dataActus
      .get(`https://graph.facebook.com/v21.0/1358813243985908/posts?fields=permalink_url&limit=3&access_token=EAAQrFhv7OioBS5xvIXOfggU7JPq9EJn2M7RfZBk3KRiVzSZA9kXZAuXRWqcSMZAY4g0nKFKczSEUyycUyZCnwTu0h1xc3tokBD3dl9tdmuABPtAYpwXgxImOcxpMNVcyAVMkRJXJZBzQLI1ZBPgqcAYHqLPvUfGQaJNlbC3yzAoN7jpZCfZCeujcbyUyzm3TvCtmHdPsDC3VQ`)
      .then((res) => {
        setDataActus(res.data.data);
      })
      .catch((error) => console.error("Erreur API :", error));

      //ajout d'un ratachement html au script de facebook
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v26.0";
      document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (dataActus.length > 0 && window.FB) { //lorsque les donnees de l'API sont prets et que le script fb est charge
      window.FB.XFBML.parse();
      //fb scanne la page pour afficher les posts, ceux-ci ayant la classe "fb-post"
    }
  }, [dataActus]);

  return (
    <div className="pageActus">
      <Navigation />       
      <div id="postsFacebook">
        <p>Suivez nos dernières actualités !</p>
        {dataActus.length === 0 ? (
          <p>Chargement des actus...</p>
        ) : (
          dataActus.map((post) => (
            <div className="postFacebook" key={post.id} style={{ marginBottom: '20px' }}>
              <div 
                className="fb-post" 
                data-href={post.permalink_url}
                data-width= {(window.innerWidth<628)? "400" : "500"}
                data-show-text="true"
              ></div>
            </div>
          ))
        )}
      </div> 
      <Footer />
    </div>
  );
}

export default Actus;