import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section6.css";

class BigsightLandingpageSection6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: "",
        };
    }
    componentDidMount() {
        this.setState({
            width: window.innerWidth,
        });
    }

    render() {
        return (
            <div id="BigSightLandingPage-Section6">
                <h1 className="BigSightLandingPage-Section6-Title">CUSTOMER</h1>
                <div className="BigSightLandingPage-Section6-Logo-Parent-Container">
                    <div className="BigSightLandingPage-Section6-Logo-Container">
                        <Row>
                            <Col className="BigSightLandingPage-Section6-Logo-Column-Container">
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-Telkom-Indonesia.png")} className="BigSightLandingPage-Section6-LogoTelkom" alt="" />
                            </Col>
                            <Col className="BigSightLandingPage-Section6-Logo-Column-Container">
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-Kemenkes.png")} className="BigSightLandingPage-Section6-LogoKemenkes" alt="" />
                            </Col>
                            <Col className="BigSightLandingPage-Section6-Logo-Column-Container">
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-Seknat-Negara.png")} className="BigSightLandingPage-Section6-LogoSeknatNegara" alt="" />
                            </Col>
                            <Col className="BigSightLandingPage-Section6-Logo-Column-Container">
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-Pertamina.png")} className="BigSightLandingPage-Section6-LogoPertamina" alt="" />
                            </Col>
                            <Col className={this.state.width < 904 ? "BigSightLandingPage-Section6-Logo-Column-Container" : "BigSightLandingPage-Section6-Logo-Column-Container-Row2-Left"}>
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-Dishub.png")} className="BigSightLandingPage-Section6-LogoDishub" alt="" />
                            </Col>
                            <Col className={this.state.width < 904 ? "BigSightLandingPage-Section6-Logo-Column-Container" : "BigSightLandingPage-Section6-Logo-Column-Container-Row2-Right"}>
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-6-AHM.png")} className="BigSightLandingPage-Section6-LogoAHM" alt="" />
                            </Col>
                        </Row>
                    </div>
                </div>
                <h1 className="BigSightLandingPage-Section6-Title2">AND MORE..</h1>
            </div>
        );
    }
}

export default BigsightLandingpageSection6;
