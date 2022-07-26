import React from 'react';
import classes from "../../../Home/main/cardList/card/Card.module.scss";
import FavoriteButton from "../../../../components/UI/FavoriteButton/FavoriteButton";
import AddButton from "../../../../components/UI/AddButton/AddButton";

const FavoriteCard = ({img, name, price, onFavorite, onPlus, favorited, onClick}) => {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({img, price, name})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({img, price, name})
        setIsFavorite(!isFavorite)
    }

    return (

        <div className={classes.card}>
            <FavoriteButton onClick={onClick} isFavorite={isFavorite} onFavorite={onClickFavorite}/>
            <img width={133} height={112} src={img} alt="Sneakers Img"/>
            <div className={classes.card__title}>{name}</div>
            <div className={classes.card__bottom}>
                <div className={classes.price}>
                    <p>Цена:</p>
                    <b>{price} руб.</b>
                </div>
                <AddButton onPlus={onClickPlus} isAdded={isAdded} />
            </div>
        </div>
    );
};

export default FavoriteCard;