import React from 'react';
import classes from "./CardList.module.scss";
import Card from "./card/Card";
import AppContext from "../../../../Services/Contexts/AppContext";

const CardList = ({ searchValue, onAddToCart, onAddToFavorite, isLoading }) => {
    const {items} = React.useContext(AppContext)

    const renderItems = () => {
       const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
       return (isLoading ? [...Array(10)] : filteredItems).map((item, index) =>(
            <Card
                key={index + 1}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
                loading={isLoading}
            />
        ))
    }
    return (
        <ul className={classes.card__list}>
            {renderItems()}
        </ul>
    );
};

export default CardList;