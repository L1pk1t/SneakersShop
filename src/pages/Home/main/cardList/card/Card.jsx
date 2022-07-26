import React from 'react';
import ContentLoader from "react-content-loader";
import classes from "./Card.module.scss";
import FavoriteButton from "../../../../../components/UI/FavoriteButton/FavoriteButton";
import AddButton from "../../../../../components/UI/AddButton/AddButton";
import AppContext from "../../../../../Services/Contexts/AppContext";


const Card = ({img, price, name, id, onPlus, onFavorite, loading}) => {
    const { isItemAdded, isItemFavorited } = React.useContext(AppContext)

    const onClickPlus = () => {
        onPlus({img, price, name, id})
    }

    const onClickFavorite = () => {
        onFavorite({img, price, name, id})
    }

    return (
        <div className={classes.card}>
            {
                loading ? (<ContentLoader
                    speed={2}
                    width={150}
                    height={181}
                    viewBox="0 0 150 181"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="7" rx="10" ry="10" width="150" height="90" />
                    <rect x="0" y="109" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="128" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="156" rx="8" ry="8" width="80" height="24" />
                    <rect x="117" y="149" rx="8" ry="8" width="32" height="32" />
                </ContentLoader>) : (
                <>
                    <FavoriteButton isFavorite={isItemFavorited(id)} onFavorite={onClickFavorite}/>
                    <img width={133} height={112} src={img} alt="Sneakers Img"/>
                    <div className={classes.card__title}>{name}</div>
                    <div className={classes.card__bottom}>
                        <div className={classes.price}>
                            <p>Цена:</p>
                            <b>{price} руб.</b>
                        </div>
                        <AddButton onPlus={onClickPlus} isAdded={isItemAdded(id)} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;