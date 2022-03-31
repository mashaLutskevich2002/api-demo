import React from "react";
import css from "./Button.module.css"

const Button = (props) => {
 return (
        <input type='button' className={css.button} value={props.name}/>
 )
}

export default Button;
