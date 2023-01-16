import React, {useContext} from "react";
import css from "./Card.module.css"
import ThemeContext from "../../Сontext/themeContext";
import Button from "../Button/Button";

const Card = (props) => {
    const theme = useContext(ThemeContext)
    const removeItem = (id) => {
        let showMess = window.confirm('Are you sure you want to delete the user?')
        if(showMess){
            props.setData(prev => prev.filter((item) => item.id !== id))
        }
    }
    return (
        <div className={theme.background === "white" ? css.card : css.cardDark} style={theme} >
            <img src={props.photo} alt='photo profile' className={css.photo} onClick={props.onClick} />
            <p style={theme}> {props.name} {props.id} </p>
            <div className={css.contactInformation} >
                <p style={theme}>{props.position}</p>
                <p style={theme}>{props.email}</p>
                <p style={theme}> {props.phone}</p>
            </div>
            <Button name='delete' onClick={() => removeItem(props.id)}/>
        </div>
    )
}

export default Card;
