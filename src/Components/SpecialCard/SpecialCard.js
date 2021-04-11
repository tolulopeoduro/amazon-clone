import classes from './SpecialCard.module.css'
import React from 'react'

const SpecialCard = () => {
    return (
        <div className = {classes.Main}>
            <div className = {classes.SignIn}>
                <p>Sign in for the best experience</p>
                <button>Sign in Securely</button>
            </div>
            <div className = {classes.Shipping}>
                <img src = "/images/shipping.jpg" alt = "" />
            </div>
        </div>
    )
}

export default SpecialCard
