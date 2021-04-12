import classes from './SearchBar.module.css'
import React, { useState } from 'react'

const SearchBar = () => {

    const [keyword , setKeyword] = useState("")

    return (
        <div className = {classes.SearchBar}>
            <form>
                <input className = {classes.Search} type = "text" placeholder = "Search Amazon" value = {keyword} onChange = {(e) => setKeyword(e.target.value)} />
                <a type = "button" className = {classes.Submit} type = "button"><img height = "30px" src = "/images/search.png" /></a>
            </form>
        </div>
    )
}

export default SearchBar
