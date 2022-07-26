import React from 'react';
import classes from './FavoriteButton.module.scss'

const FavoriteButton = ({isFavorite, onFavorite}) => {
    return (
        <button onClick={onFavorite} className={isFavorite ? classes.favorite__button_active : classes.favorite__button}>
            <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="favorite"/>
        </button>
    );
};

export default FavoriteButton;