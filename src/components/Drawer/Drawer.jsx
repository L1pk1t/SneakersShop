import React from 'react';
import classes from "./Drawer.module.scss";
import SubmitBtn from "../UI/SubmitBtn/SubmitBtn";
import DrawerList from "./DrawerList/DrawerList";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartConfirm from "./CartConfirm/CartConfirm";
import axios from 'axios'
import AppContext from "../../Services/Contexts/AppContext";
import {useCart} from "../../Services/Hooks/useCart";


const Drawer = ({ onRemove, setCartClose, items = [] }) => {
    const {cartItems, setCartItems, totalPrice} = useCart()
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const onClickOrder = async () => {
        try{
            setIsLoading(true)
            const { data } = await axios.post('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id)
            setOrderComplete(true)
            setCartItems([])
        } catch (error) {
            alert('Не удалось оформить заказ :(')
        }
        setIsLoading(false)
    }

    return (
        <div className={classes.overlay}>
            <div className={classes.drawer}>
                <div className={classes.drawer__header}>
                    <h2>Корзина</h2>
                    <div onClick={setCartClose} className={classes.btn_deny}>
                        <img src="/img/deny.svg" alt="close"/>
                    </div>
                </div>
                {isOrderComplete ? <CartConfirm orderId={orderId} onClose={setCartClose}/> :
                    <>
                    {items.length === 0 ? <CartEmpty onClose={setCartClose} /> : null}
                    <DrawerList onRemove={onRemove} items = {items} />
                    {items.length > 0 ? <ul className={classes.full_price}>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>{Math.round(totalPrice * 0.05)} руб.</b>
                        </li>
                    </ul> : null}
                    {items.length > 0 ? <SubmitBtn disabled={isLoading} onClick={onClickOrder} text={isLoading ? "Заказ оформляется..." : "Оформить заказ"}/> : null}
                </>}
            </div>
        </div>
    );
};

export default Drawer;