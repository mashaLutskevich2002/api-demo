import React, {useContext} from "react";
import Button from "../Button/Button";
import css from "./UsersBlock.module.css"
import Card from "../Card/Card";
import ThemeContext from "../../Сontext/themeContext";
import {useNavigate} from "react-router";


const UsersBlock = (props) => {
    const navigate = useNavigate();
    const perCount = 100;
    const theme = useContext(ThemeContext)

    const loadMore = () => {
        props.setLimit((limit) =>  limit + 6);
        props.setIsPressLoadMore(true);
    };

    return (

        <section className={css.usersBlock}   >
            <h1 ref={props.userGetRef} className={css.h1} style={theme}>Working with GET request</h1>
            <div className={css.cardsBLock}>
                {
                    props.data
                    .sort((a,b) => b.registration_timestamp- a.registration_timestamp)
                    .map((item) => <Card onClick={() => navigate(`/api-demo/user/${item.id}`)} photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />)
                    // console.log(item.id)
                }
            </div>
            {  props.data.length >= perCount - props.data.length
                ? <Button disabled={true} name='Show more'/>
                : <Button onClick={loadMore} name='Show more' />
            }
        </section>
    )
}

export default UsersBlock;
