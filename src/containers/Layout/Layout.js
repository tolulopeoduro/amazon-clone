import classes from "./Layout.module.css";
import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import NavBar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";

class Layout extends Component   {
    render () {
        return (
            <div className = {classes.Layout}>
                <NavBar/>
                <Carousel/>
                <Cards/>
            </div>
        )
    }
}

export default Layout;