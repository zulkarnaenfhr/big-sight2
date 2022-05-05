import React, { Component } from "react";
import "./BigSightLandingPage.css";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightLandingpageSection1 from "./BigSight-LandingPage-Section1/BigSight-LandingPage-Section1";
import BigsightLandingpageSection2 from "./BigSight-LandingPage-Section2/BigSight-LandingPage-Section2";
import BigsightLandingpageSection3 from "./BigSight-LandingPage-Section3/BigSight-LandingPage-Section3";

class Bigsightlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="BigSightNavbar-Container">
                    <Navbarbigsight />
                </div>
                <BigsightLandingpageSection1 />
                <div className="BigSight-LandingPage-Container-Section2-Section3">
                    <BigsightLandingpageSection2 />
                    <BigsightLandingpageSection3 />
                </div>
            </div>
        );
    }
}

export default Bigsightlandingpage;
