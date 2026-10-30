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
        <div className="postFacebook">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02An7b7AzL9qrThWrfgLF7K6p9aXERte5qRehr335KhZD27VvXSxdVfSyWJHAhxpuDl%26id%3D61595868208890&show_text=true" width="100%" height="100%"
          style={{'border':'none', 'overflow':'hidden'}}
          scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="postFacebook">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02REQoWrLNKLc3VWzdBqiY89kemZmtj1AKQm3yaARiiv7R7YcKrcvVJRXRgHsj5sinl%26id%3D61595868208890&show_text=true" width="100%" height="100%"
          style={{'border':'none', 'overflow':'hidden'}}
          scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="postFacebook">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0AKo5tKMi1He5TdMP1pUmqTEESb7njiTumVz9PoDbVh3jrMG3iLSkJVDmSxXeQ1MHl%26id%3D61595868208890&show_text=true" width="100%" height="100%"
          style= {{ 'border':'none', 'overflow':'hidden'}}
          scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        {/* mis en pause le temps de recuperer mon compte meta
        dataActus.length === 0 ? (
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
        */}
      </div> 
      <Footer />
    </div>
  );
}

export default Actus;