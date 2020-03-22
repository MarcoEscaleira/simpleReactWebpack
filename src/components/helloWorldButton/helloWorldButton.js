import './styles.scss';

class HelloWorldButton {
  buttonCssClass = "hello-world-button";

  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");

    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
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