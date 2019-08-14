import React from "react";

function Charcard(props) {
    return (
        <span className="charcard">
            <img alt={props.char.name} src={props.char.imageSrc} onClick={() => props.click(props.char.name)} />
            {/* <img alt="character" src={this.props.char.imageSrc} id="charcard" data-id={this.props.char.name} onClick={() => this.clickAction(this)}/> */}
        </span>
    )
}

export default Charcard;

