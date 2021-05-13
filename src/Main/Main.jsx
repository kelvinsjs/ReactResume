import React from "react";
import {Component} from "react";
import "./main.css";
import About from "./About";
import Services from "./Services";

class Main extends Component {

    render() {
        return (
            <main className="rs-main" id="linkToMain">
                <About/>
                <Services />
            </main>
        )
    }
}

export default Main;