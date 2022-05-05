import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BigSight-LandingPage-Section3.css";

class BigsightLandingpageSection3 extends Component {
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
            <div id="BigSightLandingPage-Section3">
                <Container>
                    <h1 data-aos="fade-up" data-aos-offset="0" className="BigSight-LandingPage-Section3-Title">
                        LET'S TRY OUR DEMO APPS
                    </h1>
                    <p data-aos="fade-up" data-aos-offset="0" className="BigSight-LandingPage-Section3-Desc">
                        Discover how our products are implemented in real world situations and {this.state.width > 650 ? <br /> : ""} used in various use case through our interactive demo app.
                    </p>
                    <div data-aos="fade-up" data-aos-offset="0">
                        <Link
                            className="BigSight-LandingPage-Section3-Button-Container"
                            to={{
                                pathname: `notset`,
                            }}
                        >
                            <button className="BigSight-LandingPage-Section3-Button">FREE TRIAL</button>
                        </Link>
                    </div>{" "}
                </Container>
            </div>
        );
    }
}

export default BigsightLandingpageSection3;
