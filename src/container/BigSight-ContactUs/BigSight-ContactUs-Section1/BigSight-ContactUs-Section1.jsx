import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BigSight-ContactUs-Section1.css";

class BigSightContactUsSection1 extends Component {
    render() {
        return (
            <div id="BigSightContactUs-Section1">
                <Container className="BigSightContactUs-Section1-Content-Container">
                    <Row>
                        <Col lg={5}>
                            <h1 className="BigSight-ContactUs-Section1-Title">Contact our team</h1>
                            <p className="BigSight-ContactUs-Section1-Desc">We are happy to answer your question</p>{" "}
                        </Col>
                        <Col lg={7} className="CekKanan">
                            <form action="mailto:someone@example.com" method="post" encType="text/plain" className="BigSight-ContactUs-Section1-Form-Container">
                                <label htmlFor="">Name</label>
                                <br />
                                <input className="container" placeholder="Your name" type="text" name="na1me" />
                                <br />
                                <label htmlFor="">Email</label>
                                <br />
                                <input className="container" placeholder="youremail@example.com" type="text" name="Email" />
                                <br />
                                <label htmlFor="">Phone number</label>
                                <br />
                                <input className="container" placeholder="08123567841" type="text" name="Phone Number" />
                                <br />
                                <label htmlFor="">Message</label>
                                <br />
                                <textarea className="container" placeholder="Message" type="text" name="Phone Number" cols="30" rows="10" />
                                <button type="submit">Submit</button>
                            </form>{" "}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BigSightContactUsSection1;
