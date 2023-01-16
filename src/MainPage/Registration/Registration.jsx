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
        const errorMessage2= document.getElementById('error2')
        const errorMessage3= document.getElementById('error3')
        const errorMessage4 = document.getElementById('error4')
        const errorMessage5 = document.getElementById('error5')

        const createUser = await postData(data, 'https://frontend-test-assignment-api.abz.agency/api/v1/users', token, formData)
        if (createUser.success === true){
            errorMessage.style.display = 'none'
            errorMessage2.style.display = 'none'
            errorMessage3.style.display = 'none'
            errorMessage4.style.display = 'none'
            errorMessage5.style.display = 'none'
            props.setNewUser(true)
            props.setIsPopup(true)
            props.executeScroll(props.userGetRef)
        }else{
            errorMessage.style.display = 'none'
            errorMessage2.style.display = 'none'
            errorMessage3.style.display = 'none'
            errorMessage4.style.display = 'none'
            errorMessage5.style.display = 'none'
            const errorText = [createUser.fails.name, createUser.fails.email, createUser.fails.phone, createUser.fails.position_id, createUser.fails.photo ]
            // let errorTextToString = errorText.toString().replaceAll(',', ' ')

            for(let i=0; i<errorText.length; i++){
                if(errorText[i]){
                    if(createUser.fails.name && createUser.fails.email){
                        addErrorBLock('error', `${createUser.fails.name}`)
                        addErrorBLock('error2', `${createUser.fails.email}`)
                    }

                    if(createUser.fails.name && createUser.fails.phone){
                        addErrorBLock('error', `${createUser.fails.name}`)
                        addErrorBLock('error3', `${createUser.fails.phone}`)
                    }

                    if(createUser.fails.email && createUser.fails.phone){
                        addErrorBLock('error2', `${createUser.fails.email}`)
                        addErrorBLock('error3', `${createUser.fails.phone}`)
                    }

                    if(createUser.fails.name){
                        addErrorBLock('error', `${createUser.fails.name}`)
                    }

                    if(createUser.fails.email){
                        addErrorBLock('error2', `${createUser.fails.email}`)
                    }

                    if(createUser.fails.phone){
                        addErrorBLock('error3', `${createUser.fails.phone}`)
                    }

                    if(createUser.fails.position_id){
                        addErrorBLock('error4', `${createUser.fails.position_id}`)
                    }

                    if(createUser.fails.photo){
                        addErrorBLock('error5', `${createUser.fails.photo}`)
                    }

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

            <div className={css.nameBlock}>
                <p style={{color: "red"}}>*</p>
                <Input placeholder='Your name' onChange={(e)=>handleString(e)} id='name' />
                <p style={theme} className={css.name}>The name must be at least 2 characters.</p>
            </div>
            <div id='error' className={css.error}/>

            <div>
                <p style={{color: "red"}}>*</p>
                <Input placeholder='Email' onChange={(e)=>handleString(e)} id='email'/>
            </div>

            <div id='error2' className={css.error}/>

            <div className={css.phoneBlock}>
                <p style={{color: "red"}}>*</p>
                <Input placeholder='Phone' onChange={(e)=>handleString(e)} id='phone'/>
                <p style={theme} className={css.phone}>+38XXXXXXXXXX</p>
            </div>
            <div id='error3' style={{marginTop: '15px' }} className={css.error}/>

            <div className={css.selectBLock} >
                <p style={{color: "red"}}>*</p>
                <p style={theme}> Select your position </p>
                {
                    position.map((item)=> {
                       return <Select position={item.name} onChange={(e) => handleNumber(e)} id='position_id' value={item.id}/>
                    })
                }
            </div>
            <div id='error4' style={{marginTop: '15px' }} className={css.error}/>
            <div className={css.fileBlock}>
                <p style={{color: "red"}}>*</p>
                <input className={css.fileUpload} type="file" id='photo' onChange={(e)=>handleString(e)}/>
            </div>
            <div id='error5' className={css.error}/>
            <Button name='Sign up' onClick={e => submit(e)}/>
        </section>
    )
}

export default Registration;
