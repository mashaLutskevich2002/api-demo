import {useEffect, useState} from "react";
import React from "react";
import {getData} from "../MainPage/Request/fetchData";
import Profile from "./Profile/Profile";
import {useParams} from "react-router";
import Header from "../MainPage/Header/Header";


function User() {
    const [data, setData] = useState({});
    let { id } = useParams();

    const getUser = async () => {
        let newUser = await getData(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`)
        setData(newUser.user)
        return newUser.user;
    }

    useEffect( () => {
        getUser()
    }, []);

    return (
        <Profile data={data}/>
    );
}

export default User;
