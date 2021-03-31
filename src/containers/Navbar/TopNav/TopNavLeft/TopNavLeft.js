import classes from "./TopNavLeft.module.css"


const TopNavLeft = () => {
    return (
        <div className = {classes.TopNavLeft}>
            <div className = {classes.Logo}>
                <img src = {"/images/amazon-logo.png"} alt = ""/>
            </div>
            <div className = {classes.DeliverTo}>
                <img height = "18px" width = "20px" src = {"/images/location.png"} alt = ""/>
                <div>
                    <p>Deliver to</p>
                    <p><strong>Nigeria</strong></p>
                </div>
            </div>
        </div>
    )
}

export default TopNavLeft