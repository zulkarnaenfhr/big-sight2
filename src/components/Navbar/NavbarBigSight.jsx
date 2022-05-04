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
                            <NavDropdown title="Resources" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="BigSightNavbarMenuMarginLeft">
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

                            <NavDropdown className="BigSightNavbarDropdownResources-Container" title="Resources" id="">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
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
