import React, {useRef} from "react";
import Button from "../Button/Button";
import css from "./UsersBlock.module.css"
import Card from "../Card/Card";


const UsersBlock = (props) => {
    const perCount = 100;

    const loadMore = () => {
        props.setLimit((limit) =>  limit + 6);
        props.setIsPressLoadMore(true);
    };

    return (
        <div className={css.usersBlock} >
            <h1 ref={props.userGetRef} className={css.h1}>Working with GET request</h1>
            <div className={css.cardsBLock}>
                {
                    props.data
                    .sort((a,b) => b.registration_timestamp- a.registration_timestamp)
                    .map((item) => <Card photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />)
                }
            </div>
            {  props.data.length >= perCount - props.data.length
                ? <Button disabled={true} name='Show more'/>
                : <Button onClick={loadMore} name='Show more' />
            }
        </div>
    )
}

export default UsersBlock;
