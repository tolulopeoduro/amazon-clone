import classes from './ItemSlide.module.css'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const ItemSlide = (props) => {

    
    const ItemSlide = useRef(null)

    const [enteredLeft , setEnteredLeft] = useState(false)
    const [enteredRight , setEnteredRight] = useState(false)
    const [enterSlider , setEnterSlider] = useState(false)
    const [slidePosition , setSlidePosition] = useState(0)
    const Items  = useRef(null)

    useEffect(() => {
        if (props.items) {
            return
        } else {
            axios.get('https://fakestoreapi.com/products/category/men-clothing')
            .then(response => console.log(response))
        }
        
    }, [props.items])
    
    useEffect(() => {
        toNext(slidePosition)
    } , [slidePosition])

    const toNext = (times) => {
        Items.current.scrollTo({
            top : 0,
            left: Items.current.clientWidth / 2 *times,
            behavior : "smooth"
        })
    }




    return (
        <div onMouseEnter = {() => setEnterSlider(true)} onMouseLeave = {() => setEnterSlider(false)} ref = {ItemSlide} className = {classes.Main}>
            <div className = {classes.Header}>
                    <span>{props.header}</span>
                    <a href = "https//#">{props.linkText}</a>
                </div>
                <div className = {classes.Body}>
                    <div className = {classes.ItemSlide}>
                        <div ref = {Items} className = {classes.Items}>
                            {props.items ? props.items.map(item => (
                                <div className = {classes.Item}>
                                    <a href ={item.href ? item.href : "#"}><img src = {item.src} alt = ""/></a>
                                </div>
                            )) : null}
                        </div>
                    </div>
                    <div className = {enterSlider || props.alwaysVisible ? classes.Control : classes.Hide}>
                        <div onClick = {() => slidePosition >= 0 ? setSlidePosition(slidePosition - 1) : setSlidePosition(0)} onMouseEnter = {() => setEnteredLeft(true)} onMouseLeave = {() => setEnteredLeft(false)} className ={classes.Prev}>
                            <img src = {enteredLeft  ? "/images/item-slide-prev-hover.svg" : "/images/item-slide-prev.svg"  } alt ="" />
                        </div>
                        <div onClick = {() => {
                            slidePosition <= 4 ? setSlidePosition(slidePosition + 1) : setSlidePosition(4)
                        }} className = {classes.Next} onMouseEnter = {() => setEnteredRight(true)} onMouseLeave = {() => setEnteredRight(false)} >
                            <img src = {enteredRight  ? "/images/item-slide-next-hover.svg" : "/images/item-slide-next.svg"  } alt = "" />
                        </div>      
                    </div>
                </div>
        </div>
    )
}

export default ItemSlide
