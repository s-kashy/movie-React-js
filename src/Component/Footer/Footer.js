import React from "react"
import classes from "./Footer.css"



const Footer = () => {

    return (
        <div className={classes.Footer}>
            <p> Created by Shlomo Kashy  </p>
            <p>
               Dont forget To Add Link To Repo
            </p>
            <p>
                <a href="mailto:shlomo.kashy@gmail.com">shlomo.kashy@gmail.com</a>
            </p>
            <p>Tel 052-8528804</p>
        </div>
    );
}

export default Footer