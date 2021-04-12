import classes from './BottomFooter.module.css'
import React from 'react'

const BottomFooter = () => {
    return (
        <div className = {classes.BottomFooter}>
            <div className = {classes.Preferences}>
                <div className ={classes.Language}>
                    <span>English</span>
                </div>
                <div className = {classes.Currency}>
                    <span>{"$ USD - U.S. Dollar"}</span>
                </div>
                <div className = {classes.Country}>
                    <img src ="/images/us-flag.png" height = "10px" alt = "" />
                    <span>United States</span>
                </div>
            </div>
            <div className = {classes.SignIn}>
                <p>Already a customer? Sign in</p>
            </div>
            <div className = {classes.ConditionsAndOthers}>
                <p>Conditions of Use</p> 
                <p>Privacy Notice</p> 
                <p>Interest-Based Ads</p>
            </div>
                <p className = {classes.Copyright}>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}

export default BottomFooter 