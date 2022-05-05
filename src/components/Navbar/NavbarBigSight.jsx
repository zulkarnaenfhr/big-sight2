import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "./NavbarBigSight.css";
import { Link } from "react-router-dom";
import { ButtonNavbar, NavbarButton } from "../Button/ButtonNavbar.styled";

class Navbarbigsight extends Component {
    render() {
        return (
            <Navbar id="navbarBigSight" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={require("../../src/Big-Sight/LogoBigSight.png")} alt="LogoBigSight" className="BigSightNavbarLogo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto  my-lg-0 BigSightnavbarMenu-container" style={{ maxHeight: "150px" }} navbarScroll>
                            <NavDropdown className="BigSightNavbarMenuMarginLeft DropdownProduct" title={<span className="BigSightNavbarMenuDropdown">Product</span>} id="navbarScrollingDropdown">
                                <Row className="container rowDropDown">
                                    <Col xs={7}>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Picasso</p>
                                        </Link>{" "}
                                    </Col>
                                    <Col>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Big View</p>
                                        </Link>{" "}
                                    </Col>
                                </Row>
                                <Row className="container rowDropDown">
                                    <Col xs={7}>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Smart Eye</p>
                                        </Link>{" "}
                                    </Col>
                                    <Col>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Big Box</p>
                                        </Link>{" "}
                                    </Col>
                                </Row>
                                <Row className="container rowDropDown">
                                    <Col xs={7}>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Legal Analytics</p>
                                        </Link>{" "}
                                    </Col>
                                    <Col>
                                        <Link
                                            className="BigSightDropDown-Menu1"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Big Score</p>
                                        </Link>{" "}
                                    </Col>
                                </Row>
                            </NavDropdown>
                            <Nav.Link href="/big-sight/solution" className="BigSightNavbarMenuMarginLeft">
                                <p className="BigSightNavbarMenu">Solution</p>
                            </Nav.Link>
                            <Nav.Link href="notset" className="BigSightNavbarMenuMarginLeft">
                                <p className="BigSightNavbarMenu">Partnership</p>
                            </Nav.Link>

                            <NavDropdown className="BigSightNavbarMenuMarginLeft" title={<span className="BigSightNavbarMenuDropdown">Resources</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" rendermenu>
                                    <p className="BigSightDropDown-Menu1">Documentation</p>{" "}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    <p className="BigSightDropDown-Menu1">FAQ</p>{" "}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    <p className="BigSightDropDown-Menu1">Support</p>{" "}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="BigSightNavbarMenuMarginLeft" title={<span className="BigSightNavbarMenuDropdown">Company</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" rendermenu>
                                    <p className="BigSightDropDown-Menu1">About Big Sight</p>{" "}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    <p className="BigSightDropDown-Menu1">Blog</p>{" "}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    <p className="BigSightDropDown-Menu1">Press</p>{" "}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className="row NavbarButton-Container">
                                <div className="col-6">
                                    <NavbarButton backgroundColor={"white"} border={"1px solid #d23d3d"} color={"#d23d3d"} hoverBackgroundColor={"#d23d3d"} hoverBorder={"1px solid #d23d3d"} hoverColor={"white"}>
                                        Demo Apps
                                    </NavbarButton>
                                </div>
                                <div className="col-6">
                                    <NavbarButton backgroundColor={"#d23d3d"} border={"1px solid #d23d3d"} color={"white"} hoverBackgroundColor={"white"} hoverBorder={"1px solid #d23d3d"} hoverColor={"#d23d3d"}>
                                        Contact Us
                                    </NavbarButton>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navbarbigsight;
