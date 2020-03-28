import './styles.scss';

class Heading {
  render() {
    const body = document.querySelector("body");
    const title = document.createElement("h1");

    title.innerText = "Webpack is awesome";
    title.classList.add("title");
    
    body.appendChild(title);
  }
}

export default Heading;