import React from 'react';
import classes from "./FavoriteList.module.scss";
import axios from "axios";
import Card from "../../Home/main/cardList/card/Card";
import AppContext from "../../../Services/Contexts/AppContext";

const FavoriteList = ({onAddToFavorite, onAddToCart}) => {
    const {favorites} = React.useContext(AppContext)

    return (
        <ul className={classes.favorite__list}>
            {favorites.map((item, index)=>(
                <Card
                    key={index + 1}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    favorited
                    {...item}
                />
            ))}
        </ul>
    );
};

export default FavoriteList;