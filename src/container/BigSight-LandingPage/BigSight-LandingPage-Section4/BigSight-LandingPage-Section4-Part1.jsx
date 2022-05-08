import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section4-Part1.css";

class BigSightLandingPageSection4Part1 extends Component {
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
            <div id="BigSightLandingPage-Section4-Part1-Part1">
                <Container>
                    <h1 className="BigSightLandingPage-Section4-Part1-Title">#BigSightUpdate</h1>
                    <Row className="BigSightLandingPage-Section4-Part1-Photo-Row1-Container">
                        <Col lg={4} md={6} className="BigSightLandingPage-Section4-Part1-ColumnContainer">
                            <img src={require("../../../src/Big-Sight/Landing Page/Section-1-Photo2.jpg")} className="BigSightLandingPage-Section4-Part1-Photo-Row1" alt="" />
                        </Col>
                        <Col lg={4} md={6} className="BigSightLandingPage-Section4-Part1-ColumnContainer">
                            <div className={this.state.width < 768 ? "BigSightLandingPage-Section4-MarginTop" : ""}>
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-1-Photo2.jpg")} className="BigSightLandingPage-Section4-Part1-Photo-Row1" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={12} className="BigSightLandingPage-Section4-Part1-ColumnContainer">
                            <div className={this.state.width < 992 ? "BigSightLandingPage-Section4-MarginTop" : ""}>
                                <img src={require("../../../src/Big-Sight/Landing Page/Section-1-Photo2.jpg")} className="BigSightLandingPage-Section4-Part1-Photo-Row1" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>{" "}
            </div>
        );
    }
}

export default BigSightLandingPageSection4Part1;
