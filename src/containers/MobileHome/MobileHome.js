import classes from './MobileHome.module.css'
import React from 'react'
import MultipleItems from '../../Components/MultipleItems/MultipleItems'
import { MobileItemsOne, MobileItemsThree, MobileItemsTwo } from '../../products'
import Explore from '../../Components/Explore/Explore'
import MobileFooter from "../MobileFooter/MobileFooter"

const MobileHome = () => {
    return (
        <div className = {classes.Home} >
            <img className = {classes.Banner} src = "/images/mobile/mothers-day.jpg" alt = "" />
            <div className ={classes.Signin}>
                <p>Sign in for the best experience</p>
                <button>Sign in</button>
                <a type = "button">Create an account</a>
            </div>
            <MultipleItems header = "Video game accessories under $20" footer = "Shop now" Items = {MobileItemsOne} />
            <MultipleItems header = "Stuffed Animals & Toys under $10" footer = "Shop now" Items = {MobileItemsTwo} />
            <img className = {classes.Banner} src = "/images/mobile/beauty.jpg" alt = "" />
            <MultipleItems header = "Must have Baby products" footer = "See more" Items = {MobileItemsThree} />
            <div className = {classes.End}>
                <hr/>
                <span>You've reached the end. Keep exploring!</span>
            </div>
            <Explore/>
            <div className = {classes.ToTop} onClick = {() => window.scrollTo({top : 0 , left : 0 , behavior : 'smooth'})}>
                <img height = "10px" src = "/images/down-arrow.svg" alt = "" />
                <a type = "button">TOP OF PAGE</a>
            </div>
            <MobileFooter/>
        </div>
    )
}

export default MobileHome
