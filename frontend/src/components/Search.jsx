import {useContext } from "react"
import { SearchContext } from "../context/SearchContext";

export default function Search() {
    const {updateSearchText} = useContext(SearchContext)

    const handleSearch = (e)=>{
        updateSearchText(e.target.value);
    }

    return (
        <div className="search">
            <input className="srch" onChange={handleSearch}  type="search" name="" placeholder="Type to text" />
            <a href="#"><button className="btnn">Search</button></a>
        </div>
    )
}