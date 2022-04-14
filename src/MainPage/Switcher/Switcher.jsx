import React, {useContext, useEffect, useState} from "react";
import css from "./Switcher.module.css"
import ThemeContext, {themes} from "../../Сontext/themeContext";

const Switcher = (props) => {
    const [changeValue, setChangeValue] = useState('Dark');
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setChangeValue(()=> JSON.parse(localStorage.getItem('value')));
    }, []);

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(changeValue));
    }, [changeValue]);

    const toggleTheme = () => {
        if(changeValue === 'Light'){
            setChangeValue('Dark')
             props.setChangeTheme(themes.light)
        } else {
            setChangeValue('Light')
            props.setChangeTheme(themes.dark)
        }
    }

    return (
        <section className={css.switcher} >
                <input className={theme.background ==="white"?css.button: css.buttonDark} type='submit' value={changeValue} onClick={toggleTheme}/>
        </section>
    )
}

export default Switcher;
