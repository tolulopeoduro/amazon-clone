import React, { useEffect, useRef, useState } from "react"
import classes from "./SearchBar.module.css"

const SearchBar = ()  => {

    const selectRef = useRef(null)
    const [category , setCategory] = useState("all")
    const [keyWord , setKeyword] = useState("")
    const [searchBarWidth , setSearchBarWidth] = useState(null)
    const inputRef = useRef(null)
    const [selectClasses , setSelectClasses] = useState([classes.Select])
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const SelectWidth = category.split("-").join("").length * 8 + 30;
    const [classnames , setClassnames] = useState([classes.SearchBar])
    const [coord , setCoord] = useState({x : 0 , y : 0})
    const searchBar = useRef(null)

    const initialRender = useRef(false)


    useEffect(() => {
        setSearchBarWidth(searchBar.current.clientWidth)
        console.log('updated')
    } , [windowWidth])
    
    useEffect(() => {

        const positions = inputRef.current.getBoundingClientRect();
        if (coord.x >= positions.left && coord.x <= positions.right && coord.y >= positions.top && coord.y <= positions.bottom) {
            setClassnames([classes.SearchBar , classes.Focused])
        } else {
            setClassnames([classes.SearchBar])
        }
        return () => window.removeEventListener('click' , {coord})
    } , [coord])

    useEffect(() => {
        const positions = selectRef.current.getBoundingClientRect();
        if (coord.x >= positions.left && coord.x <= positions.right && coord.y >= positions.top && coord.y <= positions.bottom) {
            setSelectClasses([ classes.Select , classes.SelectFocus])
        } else {    
            setSelectClasses([classes.Select])
        }
        return () => window.removeEventListener('click' , {coord})
    } , [coord])

    useEffect(() => {
        setTimeout(() => {
            if (initialRender.current) {
                initialRender.current = false;
            } else {
                if (undefined !== prevCategory) {
                    setClassnames([classes.SearchBar , classes.Focused])
                } 
            }
        }, 0);
    } , [category])


    
    window.onclick = (e) => {
        setCoord({x: e.pageX , y: e.pageY})
    }

    const usePrev = (data) => {
        const ref = React.useRef();
        React.useEffect(() => {
            ref.current = data
        } , [data]);
        return ref.current
    }

    const prevCategory = usePrev(category)


    window.addEventListener('resize' , () => setWindowWidth(window.innerWidth))
    return (
        <form ref= {searchBar} className = {classnames.join(" ")}>
            <div className = {selectClasses.join(" ")}>
                <select style ={{width : `${SelectWidth}px`}} ref = {selectRef} onChange = {(e) => setCategory(e.target.value)} value = {category}>
                    <option value = "all">All</option>
                    <option value = "beauty-and-personal-care">Beauty and personal care</option>
                </select>
            </div>
            <div style = {{width : "100%"}}   className ={classes.Input}>
                <input ref = {inputRef} type = "text" value = {keyWord} onChange = {(e) => setKeyword(e.target.value)}/>
            </div>
            <div className = {classes.Submit}>
                <button type = "submit">
                    <img src = {"/images/search.png"}/>
                </button>
            </div>
        </form>
    )
}

export default SearchBar;