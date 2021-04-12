import classes from './MultipleItems.module.css'
import React, { useEffect, useRef, useState } from 'react'

const MultipleItems = (props) => {

    const styles = props.Items.length === 9 ? [classes.Body , classes.NineChildren] : [classes.Body , classes.FourChildren];
    const [bodyHeight , setBodyHeight] = useState()
    const body = useRef(null)

    useEffect(() => {
        setBodyHeight(body.current.clientWidth)
    } , [bodyHeight])

    return (
        <div className = {classes.MultipleItems}>
            <div className = {classes.Header}>
                <span>{props.header}</span>
            </div>
            <div ref = {body} style = {{height : `${bodyHeight}px`}} className = {styles.join(" ")}>
                {
                    props.Items.map(item => <div style ={{backgroundImage : `url(${item})`}} className = {classes.Item}></div>)
                }
            </div>
            <div className = {classes.Footer}>
                <a type = "button">{props.footer}</a>
            </div>
        </div>
    )
}

export default MultipleItems
