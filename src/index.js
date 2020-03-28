import HelloWorld from './components/helloWorldButton/helloWorldButton.js';
import Heading from './components/heading/heading.js';
import Kiwi from './components/kiwi/kiwi';

new Heading().render();
new HelloWorld().render(); 
new Kiwi().render(); 

if (process.env.NODE_ENV === "production") {
  console.log("production mode");
}

if (process.env.NODE_ENV === "development") {
  console.log("development mode");
}