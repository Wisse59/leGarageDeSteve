import Navigation from "../components/Navigation";

function Actus() {
  return (
    <div className="pageActus">
        <Navigation />
        <iframe
            title="Publication Facebook MyAnimeList"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOfficialMyAnimeList%2Fposts%2Fpfbid0qmCJ58xxo24KqGv4bd3r3sVuYwzmdH5dSfZKyyfAJCqY5HLNpvRzW2GsaHAc1Avvl&show_text=true&width=500"
            width="500"
            height="614"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
        {/*
        <iframe title="Le dernier post Facebook du Garage de Steve"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02cbNz8vjG2LCqERa6o75TxLKavW76xeoCZ4KP6N7TJYbuitSNtZbMCc5ZJzi1bKgLl%26id%3D61595204774831&show_text=true&width=500"
        width="500"
        height="555"
        style="border:none;overflow:hidden" scrolling="no" frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
        */}
    </div>
  );
}

export default Actus;