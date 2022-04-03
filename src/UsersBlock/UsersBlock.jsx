import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import css from "./UsersBlock.module.css"
import Card from "../Card/Card";
import {getData} from "../Request/fetchData";

const UsersBlock = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6);
    const perCount = 100;

    const getUsers  = async () => {
        let newData = await getData(`https:frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`);
        return  setData([...newData.users])
    }

    useEffect( () => {
        getUsers()
    }, [limit]);

    const loadMore = () => {
        setLimit((limit) =>  limit + 6);
    };

    return (
        <div className={css.usersBlock} >
            <h1 className={css.h1}>Working with GET request</h1>
            <div className={css.cardsBLock}>
                {
                    data
                    .sort((a,b) => b.registration_timestamp- a.registration_timestamp)
                    .map((item) => <Card photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />)
                }
            </div>
            {  data.length >= perCount - data.length
                ? <Button disabled={true}  onClick={loadMore} name='Show more'/>
                : <Button onClick={loadMore} name='Show more' />
            }
        </div>
    )
}

export default UsersBlock;
