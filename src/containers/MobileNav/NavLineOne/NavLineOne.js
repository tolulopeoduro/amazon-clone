import classes from './NavLineOne.module.css'
import React from 'react'

const NavLineOne = () => {
    return (
        <div className = {classes.NavLineOne}>
                <div className ={classes.MenuButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className = {classes.Logo}>
                    <img height = "20px" src = "/images/amazon-logo.png" alt = "" />
                </div>
                <div className = {classes.SignIn}>

                </div>
        </div>
    )
}

export default NavLineOne
