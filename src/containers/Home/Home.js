import React, { useEffect, useState } from 'react'
import classes from "./Home.module.css"
import ItemSlide from "../ItemSlide/ItemSlide"


import Cards from '../Cards/Cards'
import Carousel from '../Carousel/Carousel'
import {clothings, Items, topSellers} from '../../products'
import GroupCard from '../../Components/GroupCard/GroupCard'
import Card from '../../Components/Card/Card'
import Footer from '../Footer/Footer'

const Home = () => {

    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        return () => {
            window.removeEventListener("resize" , {width})
        }
    }, [width])


    window.addEventListener("resize" , () => setWidth(window.innerWidth))

    return (
        <div className = {classes.Home}>
            <Carousel/>
            <div className ={classes.Products}>
                <Cards/>
                <ItemSlide items = {Items} alwaysVisible = {true} header = "Explore Amazon" linkText = "Click to learn more"/>
                <ItemSlide items = {topSellers} alwaysVisible = {false} header = "Amazon Top Sellers" linkText = "Shop now"/>
                <div className = {classes.Cards}>
                    <GroupCard gridArea = "one" subgrids = {clothings} href = "#" header = "Comfy styles for her" footer = "Shop now" textAlign = "Left" />
                    <Card gridArea = "two" header = "Shop Laptops and Tablets" src = "/images/laptops-and-tablets.jpg" footer = "See more"/>
                    <Card gridArea = "three" header = "Explore home bedding" src = "/images/home-bedding.jpg" footer = "See more"/>
                    {width > 1125 ? <Card gridArea = "four" header = "Create with strip lights" src = "/images/strip-lights.jpg" footer = "See more"/> : null}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
