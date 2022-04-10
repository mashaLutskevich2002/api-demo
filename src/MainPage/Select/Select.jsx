import React, {useContext} from "react";
import css from "./Select.module.css"
import ThemeContext from "../../Сontext/themeContext";

const Select = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <div className={css.select} >
            <input type='radio' name='contact' onChange={props.onChange} id={props.id} className={css.checkbox} value={props.value}/>
            <p style={theme} className={css.position}> {props.position} </p>
        </div>
    )
}

export default Select;
