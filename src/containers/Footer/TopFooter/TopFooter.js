import React from 'react'
import {TopFooterLinks} from "../../../footer-links"
import classes from "./TopFooter.module.css"

const TopFooter = () => {
    return (
        <div className = {classes.TopFooter}>
            <div className = {classes.AllLinks}>
                {
                    TopFooterLinks.map(section => (
                        <div className = {classes.Section}>
                            {
                                section.map((Link , index) => {
                                    return index === 0 ? <h2>{Link}</h2> : <a href = "http//#">{Link}</a>
                                })
                            }
                        </div>
                    ))
                }
            </div>
            <div className = {classes.OptionContainer}>
            <div className = {classes.Options}>
                <div className = {classes.Logo}>
                    <img height = "30px" src = {"/images/amazon-logo.png"} alt = ""/>
                </div>
                <div className = {classes.Language}>English</div>
                <div className = {classes.Currency}>$ USD - U.S. Dollar</div>
                <div className  = {classes.Country}><img src = {"/images/us-flag.png"} alt =  ""/> <span>United States</span></div>
            </div>
            </div>
        </div>
    )
}

export default TopFooter
