import React, {useContext} from "react";
import css from "./Card.module.css"
import ThemeContext from "../../Сontext/themeContext";
import Button from "../Button/Button";

const Card = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme.background === "white" ? css.card : css.cardDark} style={theme} onClick={props.onClick} >
            <img src={props.photo} alt='photo profile' className={css.photo}/>
            <p style={theme}> {props.name} </p>
            <div className={css.contactInformation} >
                <p style={theme}>{props.position}</p>
                <p style={theme}>{props.email}</p>
                <p style={theme}> {props.phone}</p>
            </div>
            {/*<Button name='open' onClick={props.}/>*/}
        </div>
    )
}

export default Card;
