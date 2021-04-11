import classes from "./Card.module.css";
import React from "react";


const Card = (props) => (
        <div className = {classes.Main} style ={{gridArea : props.gridArea}}>
            <div className = {classes.Header}>
                <span>{props.header}</span>
            </div>
            <div className = {classes.Image} style = {{backgroundImage : `url(${props.src})`}}></div>
            <div className ={classes.Footer}>
                <a href = {props.href}>{props.footer}</a>
            </div>
        </div>
)

export default Card