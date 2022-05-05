import { React, Component } from "react";
import { Route, Routes } from "react-router";
import BigSightfaq from "./container/BigSight-FAQ/BigSightFAQ";
import './style.css';


export default class BigSightRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/FAQ" exact element={<BigSightfaq/>}></Route>
                </Routes>
            </div>
        )
    }
}