import classes from "./Footer.module.css";
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";


const Footer = () => {
    return(
        <div className = {classes.Footer}>
            <div onClick = {() => window.scrollTo({top: 0 , left : 0 , behavior : "smooth"})} className = {classes.BackToTop}>
                <span>Back to top</span>
            </div>
        </div>
    )
}

export default Footer