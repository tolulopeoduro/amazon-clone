import classes from './NavLineOne.module.css'
import React from 'react'

const NavLineOne = () => {
    return (
        <div className = {classes.NavLineOne}>
            <div className = {classes.Left}>
                <div className ={classes.MenuButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className = {classes.Logo}>
                    <img height = "25px" src = "/images/amazon-logo.png" alt = "" />
                </div>
            </div>
            <div className = {classes.Right}>
                <div className = {classes.Cart}>
                    <img height = "25px" src = "/images/cart.svg" alt = ""/>
                    <p className = {classes.CartItems}>0</p>
                </div>
                <div className = {classes.SignIn}>
                    <p>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default NavLineOne
