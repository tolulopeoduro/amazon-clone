import classes from './Explore.module.css'
import React from 'react'

const Explore = () => {

    const departments = [
        {name : "Beauty" , src : "/images/mobile/Departments/all_beauty2x._SX300_CB485977874_.jpg"},
        {name : "Home and Kitchen" , src : "/images/mobile/Departments/furniture2x._SX300_CB485979662_.jpg"},
        {name : "Electronics" , src : "/images/mobile/Departments/headphones2x._SX300_CB485980478_.jpg"},
        {name : "Sports and Outdoors" , src : "/images/mobile/Departments/team_sports2x._SX300_CB485977166_.jpg"},
        {name : "Outdoor Clothing" , src : "/images/mobile/Departments/outdoor_clothing2x._SX300_CB485980995_.jpg"},
        {name : "Pet Supplies" , src : "/images/mobile/Departments/pet_supplies2x._SX300_CB485978664_.jpg"},
    ]

    return (
        <div className = {classes.Explore}>
                <div className = {classes.Header}>
                    <span>Explore Departments</span>
                </div>
                <div className = {classes.Body}>
                    {
                        departments.map((dep , index) => (
                            <div className = {classes.Department}>
                                <div style = {{backgroundImage : `url(${dep.src})`}} className = {classes.Image}>
                                </div>
                                <div className = {classes.Name}>
                                    <span>{dep.name}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className = {classes.Footer}>
                    <span>All Departments</span>
                </div>
            </div>
    )
}

export default Explore
