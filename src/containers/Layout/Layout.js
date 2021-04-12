import classes from "./Layout.module.css";
import React, { Component, useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import Home from "../Home/Home";
import MobileNav from "../MobileNav/MobileNav";
import MobileHome from "../MobileHome/MobileHome";

    const Layout = () => {

        const [mode , setMode] = useState("PC")
        const [windowWidth , setWindowWidth] = useState(window.innerWidth)

        useEffect(() => {
            return () => window.removeEventListener("resize" , setWindowWidth(window.innerWidth))
        } , [windowWidth])

        const Mobile = (
            <div className = {classes.LayoutMobile}>
                <MobileNav/>
                <MobileHome/>
            </div>
        )

        const Desktop = (
            <div className = {classes.Layout}>
                <NavBar/>
                <Home/>
            </div>
        )

        window.addEventListener("resize" , () => setWindowWidth(window.innerWidth))
        return windowWidth > 719 ? Desktop : Mobile;

    }


export default Layout;