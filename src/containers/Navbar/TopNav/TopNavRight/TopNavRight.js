import classes from "./TopNavRight.module.css";
import React, { useRef } from "react"


const TopNavRight = () => {

    const NavRight = useRef(null);

    return (
        <div ref = {NavRight} style ={{width : window.clientWidth}} className = {classes.TopNavRight}>
            <div className = {classes.Language}>
                <img className = {classes.Flag} alt = "" height = "18px" src = {"/images/Flag_of_the_United_States.svg"} />
                <img className = {classes.Arrow} alt = "" height = "4px" src = {"/images/down-arrow.svg"}/>
            </div>
            <div className = {classes.Accounts}>
                <div>
                    <p>Hello, Sign in</p>
                    <p><strong>Accounts & Lists</strong></p>
                </div>
                <img style = {{display : "inline"}} alt = "" className = {classes.Arrow} height = "4px" src = {"/images/down-arrow.svg"}/>
            </div>
            <div className = {classes.Returns}>
                <p>Returns</p>
                <p><strong>&#38; Orders</strong></p>
            </div>
            <div className = {classes.Cart}>
                <img height = "30px" src = {"/images/cart.svg"} alt = "" />
                <p style = {{display : "inline" , color : "white"}}>Cart</p>
                <p className = {classes.CartItems}>0</p>
            </div>
        </div>
    )
}

export default TopNavRight;