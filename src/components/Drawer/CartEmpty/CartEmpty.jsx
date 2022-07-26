import React from 'react';
import SubmitBtn from "../../UI/SubmitBtn/SubmitBtn";
import classes from "./CartEmpty.module.scss";

const CartEmpty = ({onClose}) => {
    return (
        <div className={classes.cart__empty}>
            <img src="/img/cart-empty.png" alt="cart-empty"/>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <SubmitBtn event={onClose} text={"Вернуться назад"}/>
        </div>
    );
};

export default CartEmpty;