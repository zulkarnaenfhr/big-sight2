import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class BeforeFooterBighSight extends Component {
  render() {
    return (
      <div
        className="d-flex pb-5"
        id="Bighsight-BeforeFooter-section"
        style={{ height: "465px", backgroundColor: "rgba(247, 247, 247, 1)" }}
      >
        <div
          id="Bighsight-section-location"
          className="col-4 d-flex flex-column justify-content-end align-items-center"
        >
          <img
            className="img-fluid"
            src={require("../../assets/img/LogoBigSight.png")}
            alt=""
            width={300}
            height={170}
          />
          <section style={{ width: "80%", height: "220px" }}>
            <h4>Telkom Direktorat Digital Bussiness Bandung</h4>
            <h6 className="pt-4">
              Jl. Gegerkalong Hilir no. 47, Sukasari, Kota Bandung, Jawa Barat
              40152
            </h6>
            <h6 className="pt-2">(022) 4571261</h6>
            <h6 className="pt-3">admin@SPL.id</h6>
          </section>
        </div>
        <div
          id="section-social-media"
          className="col-4 align-self-end text-align-center"
        >
          <section style={{ width: "70%", height: "220px", margin: "auto" }}>
            <h4>Ikuti Social Media Kami</h4>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ margin: "8px 10px 0px 0px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ margin: "8px 10px 0px 0px" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{ margin: "8px 10px 0px 0px" }}
            />
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              style={{ margin: "10px 8px 10px 0px 0px" }}
            />
            <h6 className="pt-4"> styid.smartplatform</h6>
            <h6 className="pt-5">
              Contact Integrated Dashboard Smart Governments
            </h6>
          </section>
        </div>
        <div id="Bighsight-section-img" className="col-4 align-self-end">
          <img
            className="img-fluid w-75"
            src={require("../../assets/img/LogoRight.png")}
            alt=""
            width={318}
            height={230}
          />
        </div>
      </div>
    );
  }
}
