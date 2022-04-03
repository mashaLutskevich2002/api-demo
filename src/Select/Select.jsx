import React from "react";
import css from "./Select.module.css"

const Select = (props) => {
    return (
        <div className={css.select} >
            <input type='radio' name='contact' onChange={props.onChange} id={props.id} className={css.checkbox} value={props.value}/>
            <p className={css.position}> {props.position} </p>
        </div>
    )
}

export default Select;
