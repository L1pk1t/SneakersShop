import React from 'react';
import classes from "./CartConfirm.module.scss";
import {Link} from "react-router-dom";
import SubmitBtn from "../../UI/SubmitBtn/SubmitBtn";

const cartConfirm = ({onClose, orderId}) => {
    return (
        <div className={classes.cart__confirm}>
            <img src="/img/cart-confirm.png" alt="cart-confirmed"/>
            <h2>Заказ оформлен!</h2>
            <p>Ваш заказ #{orderId} скоро будет передан курьерской доставке</p>
            <Link to="/"><SubmitBtn event={onClose} text={"Вернуться назад"}/></Link>
        </div>
    );
};

export default cartConfirm;

