import React from "react";

export default function SectionSubtitle(props) {
    return (
        <p className="rs-section__subtitle" key={props.id}>
            {props.subtitleText}
        </p>
    )
}