import App from "./js/App";
//import "bootstrap";
import "./main.scss";

if (module.hot) {
  module.hot.accept();
}
if (process.env !== "production") {
  console.log("Looks like we are in development mode");
}
