import classes from './ItemSlide.module.css'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const ItemSlide = (props) => {

    
    const ItemSlide = useRef(null)

    const [position , setPosition] = useState(true)
    const [enteredLeft , setEnteredLeft] = useState(false)
    const [enteredRight , setEnteredRight] = useState(false)
    const [enterSlider , setEnterSlider] = useState(false)
    const [coord , setCoord] = useState({x : 0 , y: 0})

    useEffect(() => {
        if (props.items) {
            return
        } else {
            axios.get('https://fakestoreapi.com/products/category/men-clothing')
            .then(response => console.log(response))
        }
        
    }, [])
    



    return (
        <div onMouseEnter = {() => setEnterSlider(true)} onMouseLeave = {() => setEnterSlider(false)} ref = {ItemSlide} className = {classes.Main}>
            <div className = {classes.Header}>
                    <span>{props.header}</span>
                    <a href = "#">{props.linkText}</a>
                </div>
                <div className = {classes.Body}>
                    <div className = {classes.ItemSlide}>
                        <div className = {classes.Items}>
                            {props.items ? props.items.map(item => (
                                <div className = {classes.Item}>
                                    <a href ={item.href ? item.href : "#"}></a><img src = {item.src}/>
                                </div>
                            )) : null}
                        </div>
                    </div>
                    <div className = {enterSlider || props.alwaysVisible ? classes.Control : classes.Hide}>
                        <div onMouseEnter = {() => setEnteredLeft(true)} onMouseLeave = {() => setEnteredLeft(false)} className ={classes.Prev}>
                            <img src = {enteredLeft  ? "/images/item-slide-prev-hover.svg" : "/images/item-slide-prev.svg"  } />
                        </div>
                        <div className = {classes.Next} onMouseEnter = {() => setEnteredRight(true)} onMouseLeave = {() => setEnteredRight(false)} className ={classes.Next} >
                            <img src = {enteredRight  ? "/images/item-slide-next-hover.svg" : "/images/item-slide-next.svg"  } />
                        </div>      
                    </div>
                </div>
        </div>
    )
}

export default ItemSlide
