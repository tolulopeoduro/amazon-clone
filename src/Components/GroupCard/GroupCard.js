import React from 'react'
import classes from "./GroupCard.module.css"

const GroupCard = (props) => {

    

    return (
        <div style = {{gridArea : props.gridArea}} className = {[classes.Main , classes.withFourChildren].join(" ")}>
            <div className = {classes.Header}>
                <span>{props.header}</span>
            </div>
            <div className = {classes.Image}>
                {
                    props.subgrids.map(sub => (
                        <div className = {classes.SubGrid}>
                            <div className = {classes.SubGridImage} style ={!props.useImg ? {backgroundImage : `url(${sub.src})`} : null}>
                                {props.useImg ? <img src = {sub.src} alt = ""/> : null}
                            </div>
                            <div style = {{textAlign : props.textAlign}} className = {classes.SubGridName}>
                                {sub.name}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className ={classes.Footer}>
                <a href = {props.href}>{props.footer}</a>
            </div>
        </div>
    )
}

export default GroupCard
