import Navigation from "../components/Navigation";

function Actus() {
  return (
    <div className="pageActus">
        <Navigation />       
        <div id ="postsFacebook">
          <p>Suivez nos dernières actualités !</p>
          <div class ="postFacebook">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02fXdyvtMuMPhoX3xUARRDzqP4vmCNwfL6cCEy4WDNk6Fo9DQm2EyVLfvx5YpP1xDXl%26id%3D61595204774831&show_text=true&width=500"
            width="500"
            height="610"
            style={{ border: 'none', overflow:'hidden'}}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
          </div>
          <div class ="postFacebook">
            <iframe title="Le dernier post Facebook du Garage de Steve"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02cbNz8vjG2LCqERa6o75TxLKavW76xeoCZ4KP6N7TJYbuitSNtZbMCc5ZJzi1bKgLl%26id%3D61595204774831&show_text=true&width=500"
            width="500"
            height="555"
            style= {{ border:'none', overflow:'hidden'}}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
          </div>
        </div> 
    </div>
  );
}

export default Actus;