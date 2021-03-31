import classes from "./Navbar.module.css";
import React, { Component } from "react"
import TopNav from "./TopNav/TopNav"
import BottomNav from "./BottomNav/BottomNav";


class NavBar extends Component {
    render(){
        return (
            <div className = {classes.Navbar}>
                <TopNav/>
                <BottomNav/>
            </div>
        )
    }
}

export default NavBar;