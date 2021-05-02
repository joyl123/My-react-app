import React from "./react";
import ReactDOM from "./react-dom";

let currentElement = (
  <div className="title" style={{ color: "red" }}>
    <span>hello</span>world
  </div>
);
console.log({currentElement})
// JSON.stringify,第二参数是要替换的function,第三参数,缩进的空格数,具体查mdn
console.log(JSON.stringify(currentElement,null,2))
ReactDOM.render(
  currentElement,
  document.getElementById("root")
);
/**
 * {
  "type": "div",
  "props": {
    "className": "title",
    "style": {
      "color": "red"
    },
    "children": [
      {
        "type": "span",
        "props": {
          "children": "hello"
        },
      },
      "world"
    ]
  },
}
 * 
*/