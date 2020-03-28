import kiwiImg from '../../assets/kiwi.png';
import './styles.scss';

class Kiwi {
  render() {
    const body = document.querySelector("body");
    const image = document.createElement("img");

    image.src = kiwiImg;
    image.alt = "kiwi";
    image.classList.add("kiwi-image");
    
    body.appendChild(image);
  }
}

export default Kiwi;