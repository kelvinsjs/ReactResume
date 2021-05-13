import React from "react";

function SectionTitle(props) {
    return (
        <h2 className="rs-section__title" key={props.id}>
            {props.titleText}
        </h2>
    )
}

export default SectionTitle;