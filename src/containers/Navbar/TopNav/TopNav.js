import classes from "./TopNav.module.css";
import { Component } from "react";
import TopNavLeft from "./TopNavLeft/TopNavLeft";
import SearchBar from "./SearchBar/SearchBar";
import TopNavRight from "./TopNavRight/TopNavRight";

class TopNav extends Component {
    render () {
        return (
            <div className = {classes.TopNav}>
                <TopNavLeft/>
                <SearchBar/>
                <TopNavRight/>
            </div>
        )
    }
}

export default TopNav;