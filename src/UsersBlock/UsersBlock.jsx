import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import css from "./UsersBlock.module.css"
import Card from "../Card/Card";
import profilePhoto from "../Assets/photo-cover.svg"
import {getUsers} from "../Request/getUsers";

const UsersBlock = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6);
    const perCount = 100;

    // getUsers(limit, setData)

    // const getUsers = async ()=> {
    //     try {
    //         const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`);
    //         const json = await response.json();
    //         setData(json.users)
    //     }catch (error){
    //         console.log(error)
    //     }
    //
    // }

    useEffect(() => {
        // getUsers()
        // parseUsers()
        getUsers(`https:frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`, data);

    }, [limit]);

    const parseUsers= () => {
        let arr = [...data]
        for (let i = 0; i < data.length; i++) {
            arr = data[i].map(item => (<Card photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />));
        }
        return arr
    }

    const loadMore = () => {
        setLimit((limit) =>  limit + 6);
    };

    return (
        <div className={css.usersBlock} >
            <h1 className={css.h1}>Working with GET request</h1>
            <div className={css.cardsBLock}>
                {
                    parseUsers()
                    // data
                    // // .sort((a,b) => a.registration_timestamp - b.registration_timestamp)
                    // .map((item) => <Card photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />)
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
