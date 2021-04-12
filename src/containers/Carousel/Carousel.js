import React, { useEffect, useRef, useState } from "react"
import classes from "./Carousel.module.css"

const Carousel  = () => {
    const List = [
        {src :"/images/amazon-slide6.jpg"},
        {src :"/images/mothers-day.jpg"},
        {src :"/images/amazon-slide1.jpg"},
        {src :"/images/amazon-slide2.jpg"},
        {src :"/images/amazon-slide3.jpg"},
        {src :"/images/amazon-slide4.jpg"},
        {src :"/images/amazon-slide5.jpg"},
        {src :"/images/amazon-slide6.jpg"},
        {src :"/images/mothers-day.jpg"},
    ];

    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const image = useRef(null)
    
    const toNext = (behavior , times) => {
        carousel.current.scrollTo({
            left: image.current.clientWidth * times,
            behavior: behavior
        });
    }
    
    
    const autoslide = useRef(true)
    
    const carousel = useRef(null)
    const [current , setCurrent] = useState(0)
    
    const usePrev = (data) => {
        const ref = React.useRef();
        React.useEffect(() => {
            ref.current = data
        } , [data]);
        return ref.current
    }
    const prevSlide = usePrev(current)
    
    useEffect(() => {
        toNext("smooth" , current)
        return () => {
            window.removeEventListener("resize" , setWindowWidth(window.innerWidth))
        }
    }, [windowWidth , current])
    
    useEffect(() => {
        if (current === 1 && prevSlide === 0) {
            toNext("auto" , 1)
        } else {
            toNext("smooth" , current)
        }

        setTimeout(() => {
            
        }, 700);
        if (current === 0 && prevSlide === 1) {
            setTimeout(() => {
                toNext("auto" , List.length - 2)
                setCurrent(List.length - 2)
            }, 700);
        }
        if (current === List.length - 1 && prevSlide === List.length - 2) {
            setTimeout(() => {
                toNext("auto" , 1)
                setCurrent(1)
            }, 700);
        }
    } , [current])

    useEffect(() => {
        setTimeout(() => {
            if (autoslide.current && current !== List.length - 1) {
                    setCurrent(current + 1)
            } else if (autoslide.current === false) {
                autoslide.current = false
            } else {
                autoslide.current = false   
            }
        }, 3000);
    } , [current , List.length])






    const slides = List.map(images => 
    <div ref = {image} className = {classes.Image} >
        <div></div>
        <img src = {images.src} alt = ""/>
    </div>)

    window.addEventListener("load" , () => setCurrent(1))
    window.addEventListener("resize" , () => setWindowWidth(window.innerWidth))
    return (
        <div className = {classes.Maindiv}>
            <div className ={classes.CarouselContainer} ref = {carousel}>
                {slides}
            </div>
            <div style = {{width : windowWidth > 1125? "100%" : "1125px"}} className = {classes.Controls}>
                <div className = {classes.PrevSlideButton} onClick = {() => {
                    autoslide.current = false
                    setCurrent(current - 1)
                }}>
                    <img src = {"/images/prev-slide.svg"} alt = "" height = "40px" width = "40px" />
                </div>
                <div className = {classes.NextSlideButton} onClick = {() => {
                    autoslide.current = false
                    setCurrent(current + 1)
                }}>
                    <img src = {"/images/next-slide.svg"} alt = "" height = "40px" width = "40px" />
                </div>
            </div>
        </div>
    )
}

export default Carousel;