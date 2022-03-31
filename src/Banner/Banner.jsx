import React from "react";
import css from "./Banner.module.css"
import Button from "../Button/Button";

const Banner = (props) => {
    return (
            <div className={css.banner}>
                <div className={css.text}>
                    <h1 className={css.h1}>
                        Test assignment for front-end developer
                    </h1>
                    <p className={css.p}>
                        What defines a good front-end developer is one that
                        has skilled knoledge og HTML, CSS, JS with a vast
                        understanding of User design thinking as they`ll be
                        building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                    <Button name='Sign up'/>
                </div>
            </div>
    )
}

export default Banner;
