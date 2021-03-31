import classes from "./BottomNav.module.css"
import React from "react";

const BottomNav = () => {
    return(
        <div className = {classes.BottomNav}>
            <div className = {classes.BottomNavLeft}>
                <div className = {classes.All}>
                    <div className = {classes.Menubar}>
                         <div></div>
                         <div></div>
                         <div></div>
                    </div>
                    <p>All</p>
                </div>
            </div>
            <div className = {classes.Links}>
                <div>
                    <p>Today's Deals</p>
                </div>
                <div>
                    <p>Customer Service</p>
                </div>
                <div>
                    <p>Gift Cards</p>
                </div>
                <div>
                    <p>Sell</p>
                </div>
                <div>
                    <p>Registry</p>
                </div>
            </div>
            <div className = {classes.BottomNavRight}>
                <div className = {classes.Links}>
                    <div>
                        <p>Amazons's response to COVID-19</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNav;