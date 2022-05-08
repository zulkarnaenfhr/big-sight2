import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardbigsightlandingpage from "../../../components/Card/CardBigSightLandingPage";
import "./BigSight-LandingPage-Section2.css";

class BigsightLandingpageSection2 extends Component {
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
            <div id="BigSightLandingPage-Section2">
                <div className="BigSightLandingPage-Section2-Title-Container">
                    <div>
                        <p data-aos="fade-up" data-aos-offset="100" className="BigSightLandingPage-Section2-Title1">
                            What we’re offering <br /> Services we’re providing to our clients
                        </p>
                        <p data-aos="fade-up" data-aos-offset="100" className="BigSightLandingPage-Section2-Title2">
                            EXPLORE OUR PRODUCT
                        </p>
                    </div>
                </div>
                <Row>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Legal-Analytic.png")}
                                marginTopDesc={"49px"}
                                marginTop={"37px"}
                                marginLeft={"42px"}
                                width={"119px"}
                                height={"54px"}
                                productName={`Legal Analytics `}
                                productDesc={`Merupakan aplikasi berbasis Big Data yang menghimpun seluruh peraturan perundang-undangan tersistem yang akurat, valid, dan up-to-date sehingga memudahkan pengguna`}
                                linkProduct={`notSet`}
                            />
                        </div>
                    </Col>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-View.png")}
                                marginTopDesc={"38px"}
                                marginTop={"26px"}
                                marginLeft={"11px"}
                                width={"223px"}
                                height={"76px"}
                                productName={`Big View `}
                                productDesc={`Layanan integrated dashboard smart government sistem yang berfungsi untuk menggabungkan data dari berbagai aplikasi vertikal ke dalam sebuah platform yang terintegrasi.`}
                                linkProduct={`notset`}
                            />
                        </div>
                    </Col>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Picaso.png")}
                                marginTopDesc={"26px"}
                                marginTop={"27px"}
                                marginLeft={""}
                                width={"233px"}
                                height={"78px"}
                                productName={`Picaso `}
                                productDesc={`Merupakan layanan API membantu para developer dan perusahaan dalam implementasi teknologi AI. Tiga fitur sesuai dengan kebutuhan Anda seperti Optical Character Recognition, Face Recognition, dan Object Detection.`}
                                linkProduct={`notSet`}
                            />
                        </div>
                    </Col>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-Score.png")}
                                marginTopDesc={"21px"}
                                marginTop={"55px"}
                                marginLeft={"44px"}
                                width={"169px"}
                                height={"39px"}
                                productName={`Telco Risk Scoring `}
                                productDesc={`adalah angka yang memberikan informasi atau kategori Profil Risiko Telkom pelanggan yang mencerminkan seberapa baik atau buruk risiko kredit yang menurut pemberi pinjaman tertentu Anda.`}
                                linkProduct={`notset`}
                            />
                        </div>
                    </Col>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-Box.png")}
                                marginTopDesc={"25px"}
                                marginTop={"43px"}
                                marginLeft={"42px"}
                                width={"144px"}
                                height={"46px"}
                                productName={`Big Box `}
                                productDesc={`lorem40`}
                                linkProduct={`notSet`}
                            />
                        </div>
                    </Col>
                    <Col className="BigSightLandingPage-Section2-ColumnContainer" lg={4} md={6} sm={6}>
                        <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                            <Cardbigsightlandingpage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-SmartEye.png")}
                                marginTopDesc={"29px"}
                                marginTop={"43px"}
                                marginLeft={"31px"}
                                width={"px"}
                                height={"46px"}
                                productName={`Smarteye.id `}
                                productDesc={`wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality. Beragam produk dan layanan VR dan AR untuk berbagai kebutuhan anda.`}
                                linkProduct={`notSet`}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BigsightLandingpageSection2;
