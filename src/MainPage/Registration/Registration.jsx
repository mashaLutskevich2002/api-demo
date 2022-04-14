import React, {useContext, useEffect, useState} from "react";
import Button from "../Button/Button";
import css from "./Registration.module.css"
import Input from "../Input/Input";
import Select from "../Select/Select";
import {addErrorBLock, getData, postData} from "../Request/fetchData";
import {useTokenContext} from "../../Сontext/tokenContext";
import ThemeContext from "../../Сontext/themeContext";


const Registration = (props) => {
    const [position, setPosition] = useState([]);
    const token = useTokenContext();
    const theme = useContext(ThemeContext)
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
    }, []);

    const postUser = async () => {
        let formData = await addFormData()
        const errorMessage= document.getElementById('error')
        const createUser = await postData(data, 'https://frontend-test-assignment-api.abz.agency/api/v1/users', token, formData)
        if (createUser.success === true){
            errorMessage.style.display = 'none'
            props.setNewUser(true)
            props.setIsPopup(true)
            props.executeScroll(props.userGetRef)
        }else{
            errorMessage.style.display = 'none'
            const errorText = [createUser.fails.name, createUser.fails.email, createUser.fails.phone, createUser.fails.position_id, createUser.fails.photo ]
            let errorTextToString = errorText.toString().replaceAll(',', ' ')

            for(let i=0; i<errorText.length; i++){
                if(errorText[i]){
                        addErrorBLock('error', `${errorTextToString}`)
                }
            }
        }
        return await createUser
    }

    const submit = async(e) => {
        e.preventDefault()
        await postUser()
        props.setNewUser(false) //добавился юзер в 49 строке и надо поменять состояние, чтоб при добавление нового юзера, работало без перезагрузки стр
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
        <section className={css.registration}>
            <h1 ref={props.userPostRef} style={theme} className={css.h1}>Working with Post request</h1>
            <Input placeholder='Your name' onChange={(e)=>handleString(e)} id='name' />
            <Input placeholder='Email' onChange={(e)=>handleString(e)} id='email'/>
            <div className={css.phoneBlock}>
                <Input placeholder='Phone' onChange={(e)=>handleString(e)} id='phone'/>
                <p style={theme} className={css.phone}>+38XXXXXXXXXX</p>
            </div>
            <div className={css.selectBLock} >
                <p style={theme}> Select your position </p>
                {
                    position.map((item)=> {
                       return <Select position={item.name} onChange={(e) => handleNumber(e)} id='position_id' value={item.id}/>
                    })
                }
            </div>
            <div className={css.fileBlock}>
                <input className={css.fileUpload} type="file" id='photo' onChange={(e)=>handleString(e)}/>
            </div>
            <div id='error' className={css.error}/>
            <Button name='Sign up' onClick={e => submit(e)}/>
        </section>
    )
}

export default Registration;
