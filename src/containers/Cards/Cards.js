import classes from "./Cards.module.css";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import GroupCard from "../../Components/GroupCard/GroupCard";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";

const Cards = (props) => {
    

    const subgrids = [
        {name : <span>Computer &#38; <br/> Accessories</span> , src : "/images/shop-by-category-computer.jpg" },
        {name : <span>Video Games</span> , src : "/images/shop-by-category-ps4.jpg" },
        {name : <span>Baby</span> , src : "/images/shop-by-category-baby.jpg" },
        {name : <span>Toys &#38; Games</span> , src : "/images/shop-by-category-toys.jpg" },
    ]
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        return () => {
            window.removeEventListener("resize" , {width})
        }
    }, [width])

    window.addEventListener("resize" , () => setWidth(window.innerWidth))

    return(
        <div className ={classes.Cards} >
            <Card gridArea = "one" header = "Beauty Picks" src = "/images/beauty-picks.jpg" href = "#" footer = "Shop now" />
            <Card gridArea = "two" header = "AmazonBasics" src = "/images/amazon-basics.jpg" href = "#" footer = "See more" />
            <GroupCard gridArea = "three" type = {"withFourChildren"} header = "Shop by Category" subgrids = {subgrids} 
            href = "#" footer = "Shop now" textAlign = "center" useImg = {true}/>
            <SpecialCard gridArea =  "four" />
            <Card gridArea = "five" header = "Computers & Accessories" src = "/images/computers-and-accessories.jpg" href = "#" footer = "Shop now" />
            <Card gridArea = "six" header = "Shop top categories" src = "/images/shop-top-categories.jpg" href = "#" footer = "See more" />
            <Card gridArea = "seven" header = "Get fit at home" src = "/images/get-fit-at-home.jpg" href = "#" footer = "Explore now"/>
            <Card gridArea = "eight" header = "Find your ideal TV" src = "/images/find-your-ideal-tv.jpg" href = "#" footer = "See more" />
            {width < 1126 ? <Card gridArea = "nine" header = "Electronics" src = "/images/electronics.jpg" href = "#" footer = "See more"/> : null}
        </div>
    )
}

export default Cards