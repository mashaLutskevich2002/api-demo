import React from "react";
import css from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={css.card} >
            <img src={props.photo} alt='photo profile' className={css.photo}/>
            <p> {props.name} </p>
            <div className={css.contactInformation}>
                <p>{props.position}</p>
                <p>{props.email}</p>
                <p> {props.phone}</p>
            </div>
        </div>
    )
}

export default Card;
