import classes from './NavLineThere.module.css'
import React from 'react'

const NavLineThree = () => {

    const Links = [ "Video" , "New Releases" , "Home" , "Books" , "Pharmacy" 
    , "Livestreams" , "Deals" , "Gift Cards" , "PC" ,"Health & Household" ,"Music"
     , "Amazon Basics" , "Lists"
    ]

    return (
        <div className = {classes.NavLineThree}>
            <div style ={{gridTemplateRows : `repeat(${Links.length} , fitcontent)`}} className = {classes.Links}>
                {
                    Links.map((Link , index) => <div key = {index} className = {classes.Link}><p>{Link}</p></div>)
                }
            </div>
        </div>
    )
}

export default NavLineThree
