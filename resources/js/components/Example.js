import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return <React.Fragment></React.Fragment>;
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(<Example />, document.getElementById("root"));
}
