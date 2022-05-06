import React, { Component } from "react";
import "./BigSight-LandingPage-Section7.css";
import { Link } from "react-router-dom";

class BigsightLandingpageSection7 extends Component {
    render() {
        return (
            <div id="BigSightLandingPage-Section7">
                <div className="BigSight-LandingPage-Section7-Text-Container">
                    <h1 className="BigSight-LandingPage-Section7-Title" data-aos="fade-in" data-aos-offset="100" data-aos-delay="0">
                        Embark Your AI Journey with Smart platform Now!
                    </h1>
                    <div data-aos="fade-in" data-aos-offset="100" data-aos-delay="0">
                        <Link
                            className="BigSight-LandingPage-Section7-Button-Container"
                            to={{
                                pathname: `/big-sight/contactus`,
                            }}
                        >
                            <button className="BigSight-LandingPage-Section7-Button">Contact Us</button>
                        </Link>
                    </div>
                </div>{" "}
                <div className="BigSight-LandingPage-Section7-Background-Container">
                    <img data-aos="fade-left" data-aos-offset="100" data-aos-delay="0" className="BigSight-LandingPage-Section7-Background1" src={require("../../../src/Big-Sight/Landing Page/Section-7-Background.png")} alt="" />
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="200" className="BigSight-LandingPage-Section7-Background2-Container">
                        <img className="BigSight-LandingPage-Section7-Background2" src={require("../../../src/Big-Sight/Landing Page/Section-7-Background2.png")} alt="" />
                    </div>
                </div>{" "}
            </div>
        );
    }
}

export default BigsightLandingpageSection7;
