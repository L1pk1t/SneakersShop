import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Favorites.module.scss";
import CloseBtn from "../../components/UI/CloseBtn/CloseBtn";
import FavoriteList from "./FavoriteList/FavoriteList";
import FavoritesEmpty from "./FavoritesEmpty/FavoritesEmpty";
import AppContext from "../../Services/Contexts/AppContext";

const Favorites = ({ setCartItems, setFavorites, onAddToFavorite, onAddToCart}) => {
    const {favorites} = React.useContext(AppContext)

    return (
        <div className={classes.favorites}>
            <div className={classes.container}>
                {favorites.length > 0 ? <div className={classes.favorites__inner}>
                    <div className={classes.favorites__header}>
                        <Link to="/"><CloseBtn /></Link>
                        <h2>Мои закладки</h2>
                    </div>
                    <FavoriteList onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} setCartItems={setCartItems} setFavorites={setFavorites}/>
                </div> : <FavoritesEmpty/>}
            </div>
        </div>
    );
};

export default Favorites;