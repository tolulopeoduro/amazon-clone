import classes from './TopFooter.module.css'
import React from 'react'

const TopFooter = () => {

    const Left = [ "Amazon.com", "Your Lists", "Find a Gift", "Browsing History", "Returns" , "Customer Service"]
    const Right = [ "Your Orders", "Gift Cards & Registry", "Your Account", "Sell products on Amazon"]

    return (
        <div className ={classes.TopFooter}>
            <div className = {classes.Left}>
                {
                    Left.map((link , index) => (<a href = "#">{link}</a>))
                }
            </div>
            <div className = {classes.Right}>
                {
                    Right.map((link , index) => (<a href = "#">{link}</a>))
                }
            </div>
        </div>
    )
}

export default TopFooter
