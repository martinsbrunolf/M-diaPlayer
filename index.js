// Crée les éléments du DOM
const header = document.createElement("header");
const mediaTitle1 = document.createElement("h1");
const main = document.createElement("main");
const footer = document.createElement("footer");

const mediaPlayer = document.createElement("div");
const mediaTitle = document.createElement("h2");
const mediaVideo = document.createElement("video");
const playButton = document.createElement("button");
const pauseButton = document.createElement("button");

// Ajoute les classes et les attributs nécessaires
header.classList.add("header");
main.classList.add("main");
footer.classList.add("footer");

mediaPlayer.classList.add("media-player");
mediaTitle.classList.add("media-title");
mediaVideo.classList.add("media-video");
playButton.classList.add("play-button");
pauseButton.classList.add("pause-button");

mediaTitle.textContent = "Dr Dre feat Snoop Dogg";
playButton.textContent = "Lire";
pauseButton.textContent = "Pause";

mediaVideo.src = "Dr_Dre_Still.mp4";
mediaVideo.controls = true;

// Ajoute les éléments au DOM
mediaPlayer.appendChild(mediaTitle);
mediaPlayer.appendChild(mediaVideo);
mediaPlayer.appendChild(playButton);
mediaPlayer.appendChild(pauseButton);

main.appendChild(mediaPlayer);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// Ajoute un écouteur d'événement pour le clic sur le bouton "Lire"
playButton.addEventListener("click", () => {
  mediaVideo.play();
});

// Ajoute un écouteur d'événement pour le clic sur le bouton "Pause"
pauseButton.addEventListener("click", () => {
  mediaVideo.pause();
});

// Ajoute un écouteur d'événement pour la lecture / pause de la vidéo
mediaVideo.addEventListener("play", () => {
  playButton.style.display = "flex";
  pauseButton.style.display = "inline-block";
});
mediaVideo.addEventListener("pause", () => {
  playButton.style.display = "inline-block;";
  pauseButton.style.display = "none";
});

// Définir le style CSS de la page en utilisant les méthodes setAttribute et style
pageDiv.setAttribute("style", "width: 80%; margin: 0 auto; font-family: Arial, sans-serif;");
header.setAttribute("style", "background-color: #333; color: white; padding: 20px;");
title.setAttribute("style", "margin: 0;");
uploadForm.setAttribute("style", "margin-top: 20px;");
inputLabel.setAttribute("style", "display: block; margin-bottom: 10px;");
fileInput.setAttribute("style", "display: block;");
videoContainer.setAttribute("style", "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 20px; margin-top: 20px;");

