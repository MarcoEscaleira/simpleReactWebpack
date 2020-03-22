import kiwi from './kiwi.jpeg';

function addImage() {
  const img = document.createElement("img");

  img.alt = "kiw";
  img.width = 300;
  img.src = kiwi;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;