import React from 'react';
import Ad from "./ad/ad";
import classes from './Main.module.scss'
import CardList from "./cardList/CardList";
import SearchInput from "../../../components/UI/SearchInput/SearchInput";


const Main = ({items, setCartItems, cartItems, searchValue, setSearchValue, setFavorites, favorites, onAddToFavorite, onAddToCart, isLoading}) => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <div className="main__inner">
                    <Ad/>
                    <div className={classes.card__list_title}>
                        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                        <SearchInput searchValue={searchValue}  setSearchValue={setSearchValue}/>
                    </div>
                    <CardList isLoading={isLoading} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} cartItems={cartItems} favorites={favorites} setFavorites={setFavorites} searchValue={searchValue} cartItems={cartItems} setCartItems={setCartItems} items={items}/>
                </div>
            </div>
        </main>
    );
};

export default Main;