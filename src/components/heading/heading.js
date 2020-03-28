import _ from 'lodash';
import './styles.scss';

class Heading {
  render() {
    const body = document.querySelector("body");
    const title = document.createElement("h1");

    title.innerText = _.upperFirst("webpack is awesome");
    title.classList.add("title");
    
    body.appendChild(title);
  }
}

export default Heading;