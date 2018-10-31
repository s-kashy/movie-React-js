import React from "react"
import classes from "./Footer.css"



const Footer = () => {

    return (
        <div className={classes.Footer}>
            <p> Created by Shlomo Kashy  </p>
            <p>
            <a href="https://github.com/s-kashy/restart-project">Repo GitHub</a>
            </p>
            <p>
                <a href="mailto:shlomo.kashy@gmail.com">shlomo.kashy@gmail.com</a>
            </p>
            <p>Tel 052-8528804</p>
        </div>
    );
}

export default Footer