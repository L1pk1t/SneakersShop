import React from 'react';
import classes from "./DrawerCard.module.scss";


const DrawerCard = ({img,name,price, onClick}) => {
    return (
        <div className={classes.drawer_card}>
            <img width={70} height={65} src={img} alt="Sneaker"/>
            <div className={classes.sneaker__info}>
                <div className={classes.sneaker_title}>{name}</div>
                <div className={classes.price}>{price} руб.</div>
            </div>
            <div onClick={onClick} className={classes.btn_deny}>
                <img src="/img/deny.svg" alt="deny"/>
            </div>
        </div>
    );
};

export default DrawerCard;