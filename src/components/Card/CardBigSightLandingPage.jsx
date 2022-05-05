import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./CardBigSightLandingPage.css";

const CardBigSightLandingPageLogo = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`;

const CardBigSightLandingPageDesc = styled.p`
    margin-top: ${(props) => props.marginTopDesc};
`;

class Cardbigsightlandingpage extends Component {
    render() {
        return (
            <div id="CardBigSightLandingPage">
                <Link
                    to={{
                        pathname: `${this.props.linkProduct}`,
                    }}
                >
                    <button className="CardBigSightLandingPage-Button">View More</button>
                </Link>
                <div>
                    <CardBigSightLandingPageLogo loading="lazy" src={this.props.logoImg} width={this.props.width} height={this.props.height} marginTop={this.props.marginTop} marginLeft={this.props.marginLeft} />
                    <CardBigSightLandingPageDesc marginTopDesc={this.props.marginTopDesc} className="CardBigSightLandingPage-Desc">
                        <b>{this.props.productName}</b> {this.props.productDesc}
                    </CardBigSightLandingPageDesc>
                </div>
            </div>
        );
    }
}

export default Cardbigsightlandingpage;
