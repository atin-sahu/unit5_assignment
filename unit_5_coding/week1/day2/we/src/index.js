import "./index.css";

import React from "react";
import ReactDom from "react-dom";

const name = React.createElement("p", {}, "ankush gupta");


ReactDom.render(
    <div>
        <h1>hello atin</h1>
        <p>i am living in narayan kgeda</p>
    </div>,
    document.getElementById("main")
);
