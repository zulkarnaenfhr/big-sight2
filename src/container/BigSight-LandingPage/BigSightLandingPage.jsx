import React, { Component } from "react";
import "./BigSightLandingPage.css";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightLandingpageSection1 from "./BigSight-LandingPage-Section1/BigSight-LandingPage-Section1";

class Bigsightlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="BigSightNavbar-Container">
                    <Navbarbigsight />
                </div>
                <BigsightLandingpageSection1 />
            </div>
        );
    }
}

export default Bigsightlandingpage;
