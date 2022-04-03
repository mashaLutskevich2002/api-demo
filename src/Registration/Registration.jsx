import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import css from "./Registration.module.css"
import profilePhoto from "../Assets/photo-cover.svg"
import Input from "../Input/Input";
import Select from "../Select/Select";


const Registration = (props) => {
    const [position, setPosition] = useState([])
    const [token, setToken] = useState('')
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        position_id: '',
        photo: '',
    })

    const getPosition = async () => {
        try {
            const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            const json = await response.json();
            setPosition(json.positions)

        }catch (error){
            console.log(error)
        }
    }

    const getToken = async () => {
        try {
            const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            const json = await response.json();
            setToken(json.token)
            return json.token
            // console.log(token)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getToken().then((a)=>a)
        getPosition();
    }, []);

    const postUser = async () => {
        let formData = new FormData(); // file from input type='file'
        let fileField = document.querySelector('input[type="file"]');
        formData.append('position_id', data.position_id);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('photo', fileField.files[0]);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Token': await getToken().then((a)=>a.toString() )

                }})
                .then((response)=> response.json())
                .then((data) => {
                    console.log(data);
                    if(data.success) {
                    } else {
                        // proccess server errors } })
                    }
                }) .catch((error) => console.log(error));

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

    const submit = (e) => {
        e.preventDefault()
        postUser()
    }

    return (
        <div className={css.registration}>
            <h1 className={css.h1}>Working with Post request</h1>
            <Input placeholder='Your name' onChange={(e)=>handleString(e)} id='name'/>
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
            <Button name='Sign up' onClick={(e) => submit(e)}/>
        </div>
    )
}

export default Registration;
