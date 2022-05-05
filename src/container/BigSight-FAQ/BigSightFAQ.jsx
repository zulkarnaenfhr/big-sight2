import { React, Component } from "react";
import BigsightFaqSection1 from "./BigSight-FAQ-Section1/BigSight-FAQ-Section1";
import Beforefooterbigsight from "../../component/Footer/BeforeFooterBighSight";
import Footerbigsight from "../../component/Footer/Footer";

export default class BigSightfaq extends Component {
  render() {
    return (
      <div id="BigSightFAQ">
        {/* <div className="BigSight-LandingPage-navbar-container">
                    <Navbarbigsight />
                </div>{" "} */}
        {/* <div className="BigSight-FAQ-Navbar-Container"> */}
        <BigsightFaqSection1 />
        <Beforefooterbigsight />
        <Footerbigsight />
      </div>
    );
  }
}
