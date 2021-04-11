import classes from './MobileNav.module.css'
import React from 'react'
import NavLineOne from './NavLineOne/NavLineOne'

const MobileNav = () => {
    return (
        <div className = {classes.MobileNav}>
            <NavLineOne/>
        </div>
    )
}

export default MobileNav
