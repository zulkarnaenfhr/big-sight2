import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section5.css";

class BigsightLandingpageSection5 extends Component {
    render() {
        return (
            <div id="BigSightLandingPage-Section5">
                <div className="BigSight-LandingPage-Section5-Content-Container" data-aos="fade-up" data-aos-offset="0">
                    <h1 data-aos="fade-up" data-aos-offset="100">
                        product achievement
                    </h1>
                    <Container fluid>
                        <Row className="BigSightLandingPage-Section5-Row-Content">
                            <Col md={4} sm={6} className="BigSight-LandingPage-Section5-Content-Container-Left BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Left.png")} alt="" border="0"></img>
                                    </div>
                                    <div>
                                        <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                            Cost-saving practices
                                        </p>
                                        <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                            Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className="BigSight-LandingPage-Section5-Content-Container-Middle BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving2-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Middle.png")} alt="" border="0"></img>
                                    </div>
                                    <div className="div2">
                                        <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                            Cost-saving practices
                                        </p>
                                        <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                            Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={12} className="BigSight-LandingPage-Section5-Content-Container-Right BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving3-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Right.png")} alt="" border="0"></img>{" "}
                                    </div>
                                    <div className="div3">
                                        <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                            Cost-saving practices
                                        </p>
                                        <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                            Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* <div className="row">
                        <div className="col-4 BigSight-LandingPage-Section5-Content-Container-Left BigSight-LandingPage-Section5-Content-Container-Section2">
                            <div>
                                <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Left.png")} alt="" border="0"></img>
                                <div>
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                        Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 BigSight-LandingPage-Section5-Content-Container-Section2">
                            <div>
                                <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving2-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Middle.png")} alt="" border="0"></img>
                                <div className="div2">
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                        Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 BigSight-LandingPage-Section5-Content-Container-Right BigSight-LandingPage-Section5-Content-Container-Section2">
                            <div>
                                <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving3-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Right.png")} alt="" border="0"></img>{" "}
                                <div className="div3">
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                        Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>{" "}
            </div>
        );
    }
}

export default BigsightLandingpageSection5;
