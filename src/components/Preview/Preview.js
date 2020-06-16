import React from "react";

import "./Preview.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

library.add(faLongArrowAltDown);

const preview = (props) => (
    <div className="Preview">
        <div className="PreviewTextContainer">
            <h1>Welcome to my sentence game!</h1>
            <p>Rules are simple.</p>
            <p>You win if you guess only one right sentence.</p>
        </div>
        <FontAwesomeIcon icon={faLongArrowAltDown} style={{ color: "red" }} size="3x" />
        <button className="PreviewBtn" onClick={props.click}>
            Let's play a game!
        </button>
        <div className="PreviewImage"></div>
    </div>
);

export default preview;
