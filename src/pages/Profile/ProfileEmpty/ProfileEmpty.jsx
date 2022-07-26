import React from 'react';
import classes from "./ProfileEmpty.module.scss";
import {Link} from "react-router-dom";
import SubmitBtn from "../../../components/UI/SubmitBtn/SubmitBtn";

const ProfileEmpty = () => {
    return (
        <div>
            <div className={classes.profile_empty}>
                <img src="/img/profile_empty.png" alt="Sad"/>
                <h2>У вас нет заказов(</h2>
                <p>Вы нищеброд? <br/> Оформите хотя бы один заказ.</p>
                <Link to="/"><SubmitBtn text={"Вернуться назад"}/></Link>
            </div>
        </div>
    );
};

export default ProfileEmpty;