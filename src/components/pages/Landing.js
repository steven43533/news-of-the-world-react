import { Link } from "react-router-dom"
import React from 'react'
import '../../App.css'


function Landing(props) {
    const allNews = props.articlesToDisplay.map((a, i) => {
        return (
                <Link to={`/display/${i}`}>{a.title}</Link>      
        )
    })

    const allFaves = props.faves.map((f, i) => {
        return (
            <h3><Link to={`/display/${i}`}>{f.title}</Link></h3>
        )
    })
    return(
        <div>
            <div className="searchContainer">
                <label htmlFor="articleSearch">Search for an article</label>
                <br />
                <input 
                    type="text"
                    id="articleSearch"
                    value={props.search}
                    onChange={props.handleChange}
                    className="searchInput" 
                />
            </div>
            <ul className="listContainer">
                {allNews}
            </ul>
            <div>
                <h2>Saved articles:</h2>
                <ul className="faveContainer">
                    {allFaves}
                </ul>
            </div>
        </div>
    )
}
export default Landing;