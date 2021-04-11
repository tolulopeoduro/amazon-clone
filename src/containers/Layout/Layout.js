import classes from "./Layout.module.css";
import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Home from "../Home/Home";
import MobileNav from "../MobileNav/MobileNav";


class Layout extends Component{
    render () {

        return (
            <React.Fragment>
                <div className = {classes.Layout}>
                    <NavBar/>
                    <Home/>
                </div>
                <div className = {classes.LayoutMobile}>
                    <MobileNav/>
                </div>
            </React.Fragment>

        )
    }
}

export default Layout;