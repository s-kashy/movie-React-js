import React from "react"
import classes from "./Header.css"
import Title from "../../Component/Title/Title"
import Button from "../../Component/UI/Button/Button"


const Header=(props)=> {
 
        return (
            <div className={classes.Toolbar}>
              <div className={classes.Title}>
                <Title />
              </div>
              <Button clicked={props.clicked} className={classes.Button}>
             LogIn 
              </Button>
            </div>
          );
    }

export default Header