import React from "react";
import css from "./Input.module.css"

const Input = (props) => {
    return (
        <input className={css.input} onChange={props.onChange} id={props.id} type='text'  required placeholder={props.placeholder}/>
    )
}
export default Input;
