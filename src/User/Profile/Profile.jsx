import {useEffect, useState} from "react";
import React from "react";
import css from './Profile.module.css'
import Button from "../../MainPage/Button/Button";
import {useNavigate} from "react-router";
import tv from '../../Assets/tv.png'
import iron from '../../Assets/iron-clip-art-25.png'
import cattle from '../../Assets/cattle.png'


const Profile = (props) => {
    const navigate = useNavigate();

    return (
        <section className={css.profile} >
            <img src={tv}  className={css.iconTV} alt='img'/>
            <img src={iron}  className={css.iron} alt='img'/>
            <img src={cattle} className={css.cattle} alt='img'/>
            <p className={css.name}> Welcome, my name is {props.data.name}! </p>
            <div className={css.door}>
                <div className={css.doorLeft}/>
                <div className={css.inDoor}>
                    <img className={css.img} src={props.data.photo} alt='profile pic'/>
                    <h2>{props.data.name}</h2>
                    <h3>{props.data.position}</h3>
                    <p>{props.data.email}</p>
                    <p>{props.data.phone}</p>
                </div>
                <div className={css.doorRight}/>
            </div>
                <Button name='Return' onClick={()=>navigate('/api-demo')}/>
        </section>
    );
}

export default Profile;
