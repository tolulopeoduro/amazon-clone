import classes from "./Footer.module.css";
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";



const Footer = () => {
    return(
        <div className = {classes.Footer}>
            <div className = {classes.BackToTop}>
                <span>Back to top</span>
            </div>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}

export default Footer