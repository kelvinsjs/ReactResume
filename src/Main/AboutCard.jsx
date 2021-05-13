import React from "react";

const AboutCard = (props) => {
    const {filler} = props;
    const squareStyle = {
        width: "60px",
        height: "60px",
        marginBottom: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div className="rs-about__card" key={filler.id}>
            <div className="square" style={squareStyle}>
                <img src={filler.imgSrc} alt={filler.imgAlt} className="rs-about__card-img"/>
            </div>
            <h3 className="rs-about__card-title">
                {filler.title}
            </h3>
            <p className="rs-about__card-text">
                {filler.text}
            </p>
        </div>
    )
}

export default AboutCard;