import React, { Component } from "react";
import BeforeFooterBighSight from "../../components/Footer/BeforeFooterBighSight";
import Footerbigsight from "../../components/Footer/Footer";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigSightContactUsSection1 from "./BigSight-ContactUs-Section1/BigSight-ContactUs-Section1";

class BigSightContactUs extends Component {
    render() {
        return (
            <div>
                <div className="BigSightNavbar-Container">
                    <Navbarbigsight />
                </div>
                <BigSightContactUsSection1 />
                <BeforeFooterBighSight />
                <Footerbigsight />
            </div>
        );
    }
}

export default BigSightContactUs;
