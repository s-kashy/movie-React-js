import React from "react";
import classes from "./QueryContainer.css"

const QueryContainer = (props) => {
    console.log("QueryContainer")
    return (
        <div className={classes.Search} >
        <input placeholder="Search A Movie" onChange={props.change} value={props.value} />
        </div>
    )
}
export default QueryContainer