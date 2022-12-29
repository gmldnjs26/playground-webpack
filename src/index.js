import _ from "lodash";
import "./test.scss";
import "./test2.scss";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.className = "container";

  return element;
}

document.body.appendChild(component());
