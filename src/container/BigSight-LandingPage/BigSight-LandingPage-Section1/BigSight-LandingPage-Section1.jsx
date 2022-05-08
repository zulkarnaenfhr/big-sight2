import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section1.css";

class BigsightLandingpageSection1 extends Component {
    render() {
        return (
            <div id="BigSightLandingPage-Section1">
                <Container>
                    <Row>
                        <Col lg={6} className="BigSightLandingPage-Section1-Left-Section">
                            <div>
                                <p className="BigSightLandingPage-Section1-Left-Text1">We create and build</p>
                                <p className="BigSightLandingPage-Section1-Left-Text2">Digital Products with Delightful AI Solution</p>
                                <p className="BigSightLandingPage-Section1-Left-Text3">BOOST YOUR BUSINESS VALUE</p>
                                <div className="BigSightLandingPage-Section1-Button-Container">
                                    <a href="#BigSightLandingPage-Section2">
                                        <button className="BigSightLandingPage-Section1-Button">
                                            See Details <img src="https://i.ibb.co/Bq9580y/panah-bawah.png" alt="panah-bawah" border="0"></img>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="BigSightLandingPage-Section1-Right-Section">
                            <div>
                                <img className="BigSightLandingPage-Section1-Photo" src={require("../../../src/Big-Sight/Landing Page/Section-1-Photo.jpg")}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BigsightLandingpageSection1;
