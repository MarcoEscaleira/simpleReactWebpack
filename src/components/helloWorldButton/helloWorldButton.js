import './styles.css';

class HelloWorldButton {
  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");

    button.innerHTML = "Hello World";
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const paragraph = document.createElement("p");
      paragraph.innerText = "Hello world";
      paragraph.classList.add("hello-world-text");
      body.appendChild(paragraph);
    }

    body.appendChild(button);
  }
}

export default HelloWorldButton;