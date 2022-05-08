import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-LandingPage-Section5.css";

class BigsightLandingpageSection5 extends Component {
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
            <div id="BigSightLandingPage-Section5">
                <div className="BigSight-LandingPage-Section5-Content-Container" data-aos="fade-up" data-aos-offset="0">
                    <h1>product achievement</h1>
                    <Container fluid>
                        <Row className="BigSightLandingPage-Section5-Row-Content">
                            <Col md={4} sm={6} className="BigSight-LandingPage-Section5-Content-Container-Left BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div data-aos-delay="" data-aos={this.state.width > 992 ? "fade-up-right" : this.state.width > 576 ? "fade-right" : "fade-up"} className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Left.png")} alt="" border="0"></img>
                                    </div>
                                    <div>
                                        <p data-aos={this.state.width > 992 ? "fade-up-right" : this.state.width > 576 ? "fade-right" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Title">
                                            Cost-saving practices
                                        </p>
                                        <h3 data-aos={this.state.width > 992 ? "fade-up-right" : this.state.width > 576 ? "fade-right" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc">
                                            Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className="BigSight-LandingPage-Section5-Content-Container-Middle BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div data-aos-delay="" data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving2-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Middle.png")} alt="" border="0"></img>
                                    </div>
                                    <div className="div2">
                                        <p data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Title">
                                            Cost-saving practices
                                        </p>
                                        <h3 data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc">
                                            Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={12} className="BigSight-LandingPage-Section5-Content-Container-Right BigSight-LandingPage-Section5-Content-Container-Section2">
                                <div className="BigSightLandingPage-Section5-EachContent">
                                    <div data-aos-delay="" data-aos={this.state.width > 992 ? "fade-up-left" : this.state.width > 576 ? "fade-up" : "fade-up"} className="BigSightLandingPage-Section5-EachContent-Logo-Container">
                                        <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving3-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Right.png")} alt="" border="0"></img>{" "}
                                    </div>
                                    <div className="div3">
                                        <p data-aos={this.state.width > 992 ? "fade-up-left" : this.state.width > 576 ? "fade-up" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Title">
                                            Cost-saving practices
                                        </p>
                                        <h3 data-aos={this.state.width > 992 ? "fade-up-left" : this.state.width > 576 ? "fade-up" : "fade-up"} className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc">
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
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" >
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" >
                                        Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 BigSight-LandingPage-Section5-Content-Container-Section2">
                            <div>
                                <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving2-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Middle.png")} alt="" border="0"></img>
                                <div className="div2">
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" >
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" >
                                        Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 BigSight-LandingPage-Section5-Content-Container-Right BigSight-LandingPage-Section5-Content-Container-Section2">
                            <div>
                                <img loading="lazy" className="BigSight-LandingPage-Section5-Content-CostSaving3-Logo" src={require("../../../src/Big-Sight/Landing Page/Section-5-Right.png")} alt="" border="0"></img>{" "}
                                <div className="div3">
                                    <p className="BigSight-LandingPage-Section5-Content-CostSaving1-Title" >
                                        Cost-saving practices
                                    </p>
                                    <h3 className="BigSight-LandingPage-Section5-Content-CostSaving1-Desc" >
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
