import React, { Component } from "react";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import Bigsightlandingpage from "./container/BigSight-LandingPage/BigSightLandingPage";
import BigSightfaq from "./container/BigSight-FAQ/BigSightFAQ";

class BigsightRouter extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/big-sight/" exact element={<Bigsightlandingpage />} />
          <Route path="/FAQ" exact element={<BigSightfaq />}></Route>
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
