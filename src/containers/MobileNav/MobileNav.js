import classes from './MobileNav.module.css'
import React from 'react'
import NavLineOne from './NavLineOne/NavLineOne'
import SearchBar from './SearchBar/SearchBar'
import NavLineThree from './NavLineThree/NavLineThree'
import NavLineFour from './NavLineFour/NavLineFour'

const MobileNav = () => {
    return (
        <div className = {classes.MobileNav}>
            <NavLineOne/>
            <SearchBar/>
            <NavLineThree/>
            <NavLineFour />
        </div>
    )
}

export default MobileNav
