import classes from './MobileFooter.module.css'
import TopFooter from "./TopFooter/TopFooter"
import React from 'react'
import BottomFooter from './BottomFooter/BottomFooter'

const MobileFooter = () => {
    return (
        <div className = {classes.MobileFooter}>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}

export default MobileFooter
