import React, { useEffect, useRef, useState } from "react"
import classes from "./Carousel.module.css"

const Carousel  = () => {
    const [List , setList] = useState([
        {src :"/images/amazon-slide6.jpg"},
        {src :"/images/amazon-slide1.jpg"},
        {src :"/images/amazon-slide2.jpg"},
        {src :"/images/amazon-slide3.jpg"},
        {src :"/images/amazon-slide4.jpg"},
        {src :"/images/amazon-slide5.jpg"},
        {src :"/images/amazon-slide6.jpg"},
        {src :"/images/amazon-slide1.jpg"},
    ]);

    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const [onOff , setOnOff]  = useState(true)
    const image = useRef(null)
    
    const toNext = (behavior , times) => {
        carousel.current.scrollTo({
            left: image.current.clientWidth * times,
            behavior: behavior
        });
    }

    
    
    const initialRender = useRef(true)
    const middle = useRef(null)
    const autoslide = useRef(true)
    
    const carousel = useRef(null)
    const [current , setCurrent] = useState(0)

    useEffect(() => {
        toNext("auto" , current)
        return () => {
            window.removeEventListener("resize" , setWindowWidth(window.innerWidth))
        }
    }, [windowWidth])
    
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
    } , [current])

    const usePrev = (data) => {
        const ref = React.useRef();
        React.useEffect(() => {
            ref.current = data
        } , [data]);
        return ref.current
    }



    const prevSlide = usePrev(current)


    const slides = List.map(images => 
    <div ref = {image} className = {classes.Image}>
        <img src = {images.src}/>
    </div>)

    window.addEventListener("load" , () => setCurrent(1))
    window.addEventListener("resize" , () => { autoslide.current = false})
    window.addEventListener("resize" , () => setWindowWidth(window.innerWidth))
    return (
        <div className = {classes.Maindiv}>
            <div className ={classes.CarouselContainer} ref = {carousel}>
                {slides}
            </div>
            <div className = {classes.PrevSlideButton} onClick = {() => {
                autoslide.current = false
                setCurrent(current - 1)
            }}>
                <img src = {"/images/prev-slide.svg"} height = "40px" width = "40px" />
            </div>
            <div className = {classes.NextSlideButton} onClick = {() => {
                autoslide.current = false
                setCurrent(current + 1)
            }}>
                <img src = {"/images/next-slide.svg"} height = "40px" width = "40px" />
            </div>
        </div>
    )
}

export default Carousel;