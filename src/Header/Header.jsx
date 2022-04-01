import React from "react";
import Button from "../Button/Button";
import css from "./Header.module.css"
import logo from "../Assets/Logo.svg"

const Header = (props) => {
    return (
        <div className={css.header}>
            <img src={logo} className={css.logo}/>
            <div className={css.header__button}>
                <div className={css.button}>
                    <Button name='Users'/>
                </div>
                <div className={css.button}>
                    <Button name='Sign up'/>
                </div>
            </div>
        </div>
    )
}

export default Header;
