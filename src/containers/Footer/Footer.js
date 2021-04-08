import classes from "./Footer.module.css";
import react from "react";



const Footer = () => {
    return(
        <div className = {classes.Footer}>
            <div className = {classes.BackToTop}>
                <span>Back to top</span>
            </div>
        </div>
    )
}

export default Footer