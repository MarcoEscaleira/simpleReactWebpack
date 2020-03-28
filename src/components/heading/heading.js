import _ from 'lodash';
import kiwiImg from '../../assets/kiwi.png';
import './styles.scss';

class Heading {
  render() {
    const body = document.querySelector("body");
    const title = document.createElement("h1");
    const img = document.createElement("img");
    
    img.src = kiwiImg;
    img.classList.add("image");

    title.innerText = _.upperFirst("webpack is awesome");
    title.classList.add("title");
    
    body.appendChild(title);
    body.appendChild(img);
  }
}

export default Heading;