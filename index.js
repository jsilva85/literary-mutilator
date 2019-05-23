import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles.css";
import { ChangeColorOnClick } from "./ChangeColorOnClick";
import { ChangeFontStyle } from "./ChangeFontStyle";
import { HighlightBackground } from "./HighlightBackground";
import { FindAndReplace } from "./FindAndReplace";

function App() {
    return (
        <>
        <div className="container">
        <ChangeColorOnClick />
        <ChangeFontStyle />
        <HighlightBackground />
        <FindAndReplace />
        </div>
        </>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
