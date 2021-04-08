import classes from "./Layout.module.css";
import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Home from "../Home/Home";

class Layout extends Component   {
    render () {
        return (
            <div className = {classes.Layout}>
                <NavBar/>
                <Home/>
            </div>
        )
    }
}

export default Layout;