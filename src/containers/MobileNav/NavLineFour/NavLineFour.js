import classes from './NavLineFour.module.css'
import React from 'react'

const NavLineFour = () => {
    return (
        <div className = {classes.NavLineFour}>
            <div className = {classes.DeliverTo}>
                <img src = "/images/location.png" alt = "" height = "20px" width = "20px" />
                <p>Deliver to Nigeria</p>
            </div>
        </div>
    )
}

export default NavLineFour
