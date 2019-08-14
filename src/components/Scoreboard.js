import React from "react";

function Scoreboard(props) {
    return (
        <div className="jumbotron" id="scoreboard">
            <h2>Scoreboard</h2>
            <div id="scorebox">
                <p id="score">{props.score}</p>
            </div>
        </div>
    );
}

export default Scoreboard;