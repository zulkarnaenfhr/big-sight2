import React, { Component } from "react";
import "./BigSightLandingPage.css";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightLandingpageSection1 from "./BigSight-LandingPage-Section1/BigSight-LandingPage-Section1";
import BigsightLandingpageSection2 from "./BigSight-LandingPage-Section2/BigSight-LandingPage-Section2";
import BigsightLandingpageSection3 from "./BigSight-LandingPage-Section3/BigSight-LandingPage-Section3";
import BigsightLandingpageSection5 from "./BigSight-LandingPage-Section5/BigSight-LandingPage-Section5";
import Blankpages from "../../components/BlankPages/BlankPages";
import BigsightLandingpageSection6 from "./BigSight-LandingPage-Section6/BigSight-LandingPage-Section6";
import BigsightLandingpageSection7 from "./BigSight-LandingPage-Section7/BigSight-LandingPage-Section7";

class Bigsightlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="BigSightNavbar-Container">
                    <Navbarbigsight />
                </div>
                <Blankpages />
                <div className="BigSight-LandingPage-Container-Section2-Section3">
                    <BigsightLandingpageSection2 />
                    <BigsightLandingpageSection3 />
                </div>
                <BigsightLandingpageSection5 />
                <BigsightLandingpageSection6 />
                <BigsightLandingpageSection7 />
            </div>
        );
    }
}

export default Bigsightlandingpage;
