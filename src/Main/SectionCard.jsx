import React from "react";

export default function SectionCard(props) {
    const {CardFiller} = props;
    return (
        <li className="rs-services__item" key={CardFiller.id}>
            <img src={CardFiller.imgSrc} alt={CardFiller.imgAlt}/>
            <div className="rs-services__card-text">
                <h4 className="rs-services__card-title">
                    {CardFiller.title}
                </h4>
                <p className="rs-secvices__card-desription">
                    {CardFiller.text}
                </p>
            </div>
        </li>
    )
}