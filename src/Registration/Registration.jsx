import React, {useContext, useEffect, useState} from "react";
import Button from "../Button/Button";
import css from "./Registration.module.css"
import Input from "../Input/Input";
import Select from "../Select/Select";
import {getData, postData} from "../Request/fetchData";
import {useForm} from "react-hook-form";
import tokenContext from "../App";
import {useTokenContext} from "../Сontext/context";

const Registration = (props) => {
    const [position, setPosition] = useState([]);
    // const [token, setToken] = useState('');
    const token = useTokenContext();

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        position_id: '',
        photo: '',
    })

    const getPosition = async () => {
        let newPosition = await getData('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        setPosition([...newPosition.positions])
        return position
    }

    // const getToken = async () => {
    //     let newToken = await getData('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    //     setToken(newToken.token)
    //     return newToken.token
    // }

    const addFormData = () => {
        let formData = new FormData();
        let fileField = document.querySelector('input[type="file"]');
        formData.append('position_id', data.position_id);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('photo', fileField.files[0]);
        return formData
    }

    useEffect( () => {
        getPosition();
        // console.log(token)

    }, []);

    const postUser = async () => {
        // let token = await getToken()
        let formData = await addFormData()
        return await postData(data, 'https://frontend-test-assignment-api.abz.agency/api/v1/users', token, formData)
    }

    const submit = async(e) => {
        e.preventDefault()
        await postUser()
        props.setNewUser(true)
    }

    const handleString = (e) =>{
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
    }

    const handleNumber = (e) =>{
        const newData = { ...data }
        newData[e.target.id] = parseInt(e.target.value);
        setData(newData)
    }

    return (
        <div className={css.registration}>
            <h1 className={css.h1}>Working with Post request</h1>
            <Input placeholder='Your name' onChange={(e)=>handleString(e)} id='name' />
            <Input placeholder='Email' onChange={(e)=>handleString(e)} id='email'/>
            <div className={css.phoneBlock}>
                <Input placeholder='Phone' onChange={(e)=>handleString(e)} id='phone'/>
                <p className={css.phone}>+38(XXX) XXX-XX-XX</p>
            </div>
            <div className={css.selectBLock}>
                <p> Select your position </p>
                {
                    position.map((item)=> {
                       return <Select position={item.name} onChange={(e) => handleNumber(e)} id='position_id' value={item.id}/>
                    })
                }
            </div>
            <div className={css.fileBlock}>
                <input className={css.fileUpload} type="file" id='photo' onChange={(e)=>handleString(e)}/>
            </div>
            <Button name='Sign up' onClick={e => submit(e)}/>
        </div>
    )
}

export default Registration;
