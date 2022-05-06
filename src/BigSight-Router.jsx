import React, { Component } from "react";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import Bigsightlandingpage from "./container/BigSight-LandingPage/BigSightLandingPage";
import BigSightfaq from "./container/BigSight-FAQ/BigSightFAQ";
import BigSightContactUs from "./container/BigSight-ContactUs/BigSightContactUs";

class BigsightRouter extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/big-sight/" exact element={<Bigsightlandingpage />} />
          <Route path="/big-sight/FAQ" exact element={<BigSightfaq />}></Route>
          <Route path="/big-sight/ContactUs" exact element={<BigSightContactUs />}></Route>
          <Route
            path="*"
            element={
              <div id="notfound-page-container">
                <p>Page Not Found</p>
              </div>
            }
          />{" "}
        </Routes>
      </div>
    );
  }
}

export default BigsightRouter;
