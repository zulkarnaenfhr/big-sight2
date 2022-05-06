import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default class BeforeFooterBighSight extends Component {
    render() {
        return (
            <div className="d-flex pb-5 pt-5 flex-sm-row flex-column" id="Bighsight-BeforeFooter-section" style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}>
                <div id="Bighsight-section-location" className="col-sm-4 col d-flex flex-column justify-content-end align-items-center">
                    <img className="img-fluid" src={require("../../src/Big-Sight/FAQ/LogoBigSight.png")} alt="" width={300} height={170} />
                    <section className="w-75" style={{ height: "220px" }}>
                        <h4 className="fw-bold fs-5" style={{ color: "rgba(72, 72, 72, 1)" }}>
                            Telkom Direktorat Digital Bussiness Bandung
                        </h4>
                        <h6 className="pt-4">Jl. Gegerkalong Hilir no. 47, Sukasari, Kota Bandung, Jawa Barat 40152</h6>
                        <h6 className="pt-2">(022) 4571261</h6>
                        <h6 className="pt-3">admin@SPL.id</h6>
                    </section>
                </div>
                <div id="section-social-media" className="col-sm-4 col align-self-sm-end pt-sm-0 pt-4 pb-sm-0 pb-4">
                    <section className=" w-75 mx-auto" style={{ height: "220px" }}>
                        <h4 className="fw-bold fs-5" style={{ color: "rgba(72, 72, 72, 1)" }}>
                            Ikuti Social Media Kami
                        </h4>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: "8px 10px 0px 0px" }} />
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: "8px 10px 0px 0px" }} />
                        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ margin: "8px 10px 0px 0px" }} />
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ margin: "10px 8px 10px 0px 0px" }} />
                        <h6 className="pt-4"> styid.smartplatform</h6>
                        <h6 className="pt-sm-5 pt-4">Contact Integrated Dashboard Smart Governments</h6>
                    </section>
                </div>
                <div id="Bighsight-section-img" className="col-sm-4 col align-self-end text-sm-start text-center">
                    <img className="img-fluid w-75" src={require("../../src/Big-Sight/FAQ/LogoRight.png")} alt="" width={318} height={230} />
                </div>
            </div>
        );
    }
}
