import classes from './BottomFooter.module.css'
import React from 'react'
import { BottomFooterLinks } from '../../../footer-links'


const BottomFooter = () => {
    return (
        <div className = {classes.BottomFooter}>
            <table className ={classes.LinkTable}>
                <tr>
                    {
                        BottomFooterLinks.map(links => (links))
                    }
                </tr>
            </table>
            <div className = {classes.Copyright}>
                <p>Conditions of Use</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
                <p>{"@ 1998 - 2021, Amazon.com, Inc or its affiliates"}</p>
            </div>
        </div>
    )
}

export default BottomFooter
