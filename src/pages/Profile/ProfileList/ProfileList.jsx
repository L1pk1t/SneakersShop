import React from 'react';
import Card from "../../Home/main/cardList/card/Card";
import classes from "./ProfileList.module.scss";

const ProfileList = ({onAddToFavorite, onAddToCart, purchases}) => {
    return (
        <ul className={classes.profile__list}>
            {purchases.map((item, index)=>(
                <Card
                    key={index + 1}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    favorited={true}
                    {...item}
                />
            ))}
        </ul>
    );
};

export default ProfileList;