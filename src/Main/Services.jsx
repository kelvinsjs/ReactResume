import React from "react";
import SectionTitle from "../SectionTitle";
import SectionSubtitle from "../SectionSubtitle";
import SectionCard from "./SectionCard";
import ServiceHolder from "./ServiceHolder";

const Services = () => {
    const textFiller = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.";
    const ServiceCards = ServiceHolder.map((holder) =>
        <SectionCard CardFiller={holder}/>
    )
    return (
        <section className="rs-main__services" id="services">
            <div className="container">
                <SectionTitle id="63f253af480b44de9019cd98547962e0" titleText="Services"/>
                <SectionSubtitle id="27df0830990140c3b03b735a71de35b1" subtitleText={textFiller}/>
                <ul className="rs-service__cards">
                    {ServiceCards}
                </ul>
            </div>
        </section>
    )
}

export default Services;