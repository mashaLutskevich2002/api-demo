import React, {useContext} from "react";
import Button from "../Button/Button";
import css from "./Header.module.css"
import logo from "../../Assets/Logo.svg"
import logoWhite from "../../Assets/Group 44.png"
import ThemeContext, {themes} from "../../Сontext/themeContext";


const Header = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <header className={css.header} style={theme} >
            <img src={theme.background === 'white' ? logo : logoWhite} className={css.logo} alt='logo'/>
            <div className={css.header__button}>
                <div className={css.button}>
                    <Button name='Users' onClick={()=>props.executeScroll(props.userGetRef)}/>
                </div>
                <div className={css.button}>
                    <Button name='Sign up' onClick={()=>props.executeScroll(props.userPostRef)}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
