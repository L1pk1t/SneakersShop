import React from 'react';
import SubmitBtn from "../../../components/UI/SubmitBtn/SubmitBtn";
import classes from "./FavoritesEmpry.module.scss";
import {Link} from "react-router-dom";

const FavoritesEmpty = () => {
    return (
        <div className={classes.favorites_empty}>
            <img src="/img/favorites_empty_img.png" alt="Sad"/>
            <h2>Закладок нет :(</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/"><SubmitBtn text={"Вернуться назад"}/></Link>
        </div>
    );
};

export default FavoritesEmpty;