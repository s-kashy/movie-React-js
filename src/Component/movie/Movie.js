import React from "react"
import classes from "./Movie.css"

const Movie = (props) => {
    return (
        <div className={classes.Movie} id={props.id} onClick={props.clicked}>
            <h6>{props.name}</h6>
            <p>{props.category}</p>
            <p>{props.year}</p>
        </div>
    )
}
export default Movie