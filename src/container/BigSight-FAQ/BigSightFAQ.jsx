import { React, Component } from "react";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";

import BigsightFaqSection1 from "./BigSight-FAQ-Section1/BigSight-FAQ-Section1";
import Beforefooterbigsight from "../../components/Footer/BeforeFooterBighSight";
import Footerbigsight from "../../components/Footer/Footer";

export default class BigSightfaq extends Component {
  render() {
    return (
      <div id="BigSightFAQ">
        <div className="BigSightNavbar-Container">
          <Navbarbigsight />
        </div>

        {/* <div className="BigSight-FAQ-Navbar-Container"> */}
        <BigsightFaqSection1 />
        <Beforefooterbigsight />
        <Footerbigsight />
      </div>
    );
  }
}
