import React from "react";
import css from "./Popup.module.css"
import Button from "../Button/Button";
import successIcon from "../../Assets/success.png"

const Popup = (props) => {
    return (
        <div className={props.isPopup ? css.active : css.popup} onClick={()=>props.setIsPopup(false)}>
            <div className={css.contentPopup} onClick={e=>e.stopPropagation()}>
                <img src={successIcon} className={css.icon} alt='img'/>
                <p className={css.h1}> SUCCESS </p>
                <p className={css.p}>User successfully created!</p>
                <Button onClick={()=>props.setIsPopup(false)} name='Close'/>
            </div>
        </div>
    )
}

export default Popup;
