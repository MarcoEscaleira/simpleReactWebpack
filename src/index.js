import HelloWorld from './components/helloWorldButton/helloWorldButton.js';
import Heading from './components/heading/heading.js';

new Heading().render();
new HelloWorld().render(); 

if (process.env.NODE_ENV === "production") {
  console.log("production mode");
}

if (process.env.NODE_ENV === "development") {
  console.log("development mode");
}

new Heading().randomMethod();