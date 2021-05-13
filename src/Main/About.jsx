import React from "react";
import SectionTitle from "../SectionTitle";
import SectionSubtitle from "../SectionSubtitle";
import AboutCard from "./AboutCard";
import fillers from "./cardHolder";

export default function About() {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. ";
    const aboutCards = fillers.map((filler) =>
        <AboutCard filler={filler}/>
    )
    return (
        <section className="rs-main__about" id="about">
            <div className="container">
                <div className="rs-about__block">
                    <SectionTitle id="9b8fd85952f646ada433c4ec6eaadcc4" titleText="What we do"/>
                    <SectionSubtitle id="b666f234a30c44ec9b56c52bbfabb0b9" subtitleText={loremText}/>
                    <div className="rs-about__cards">
                        {aboutCards}
                    </div>
                </div>
            </div>
        </section>
    );
}