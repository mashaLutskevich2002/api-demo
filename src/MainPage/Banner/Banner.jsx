import React, {useContext} from "react";
import css from "./Banner.module.css"
import Button from "../Button/Button";
import ThemeContext from "../../Сontext/themeContext";

const Banner = (props) => {
    const theme = useContext(ThemeContext)
    return (
            <section className={theme.background === "white" ? css.banner: css.bannerDark}>
                <div className={css.text} >
                    <h1 className={css.h1}>
                        Test assignment for front-end developer
                    </h1>
                    <p className={css.p}>
                        What defines a good front-end developer is one that
                        has skilled knowledge og HTML, CSS, JS with a vast
                        understanding of User design thinking as they`ll be
                        building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                    <Button name='Sign up' onClick={()=> props.executeScroll(props.userPostRef)}/>
                </div>
            </section>
    )
}

export default Banner;
