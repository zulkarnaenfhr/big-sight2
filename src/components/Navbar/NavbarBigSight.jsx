import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./NavbarBigSight.css";
import { Link } from "react-router-dom";

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
                        <Nav className="me-auto my-2 my-lg-0 BigSightnavbarMenu-container" style={{ maxHeight: "100px" }} navbarScroll>
                            <Nav.Link>
                                <Link
                                    className="BigSightNavbarMenu"
                                    to={{
                                        pathname: `/big-sight/solution`,
                                    }}
                                >
                                    <p>Solution</p>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="BigSightNavbarMenuMarginLeft">
                                <Link
                                    className="BigSightNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </Nav.Link>

                            <NavDropdown className="BigSightNavbarMenuMarginLeft" title={<span className="BigSightNavbarMenuDropdown">Resources</span>} id="navbarScrollingDropdown">
                                <Link
                                    className="BigSightDropDown-Menu1"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Documentation</p>
                                </Link>
                                <Link
                                    className="BigSightDropDown-Menu1"
                                    to={{
                                        pathname: `/big-sight/FAQ`,
                                    }}
                                >
                                    <p className="BigSightDropDown-Menu1-Row2">FAQ</p>
                                </Link>
                                <Link
                                    className="BigSightDropDown-Menu1"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p className="BigSightDropDown-Menu1-Row3">Support</p>
                                </Link>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navbarbigsight;
