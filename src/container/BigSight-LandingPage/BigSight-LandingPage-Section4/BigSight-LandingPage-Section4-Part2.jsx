import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section4-Part2.css";

class BigSightLandingPageSection4Part2 extends Component {
    render() {
        return (
            <div id="BigSightLandingPage-Section4-Part1-Part2">
                <Container>
                    <Row>
                        <Col lg={6} className="BigSightLandingPage-Section4-Part1-Part2-Left">
                            <h1 className="BigSightLandingPage-Section4-Part2-Title">
                                What we’re offering Services <span>we’re providing to our clients</span>{" "}
                            </h1>
                        </Col>
                        <Col lg={6} className="BigSightLandingPage-Section4-Part1-Part2-Right">
                            <img src={require("../../../src/Big-Sight/Landing Page/Section-1-Photo2.jpg")} className="BigSightLandingPage-Section4-Part2-Photo" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BigSightLandingPageSection4Part2;
