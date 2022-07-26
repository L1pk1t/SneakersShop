import React from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.scss'
import {useCart} from "../../Services/Hooks/useCart";

const Header = ({ onClickCart, favoriteEmpty}) => {
    const {totalPrice} = useCart()
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header__inner}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                        <div className={classes.logo}>
                            <img width={40} height={40} src="img/logo.png" alt="logo"/>
                            <div className="logo__text">
                                <h3>REACT SNEAKERS</h3>
                                <p>Магазин лучших кроссовок</p>
                            </div>
                        </div>
                    </Link>
                    <nav>
                        <ul className={classes.menu__list}>
                            <li onClick={onClickCart}>
                                <img src="img/cart.svg" alt="cart"/>
                                <span>{totalPrice} руб.</span>
                            </li>
                            <li>
                                <Link to="/favorites">{favoriteEmpty ? <img src="/img/favorite.svg" alt="favorite"/> : <img src="/img/liked.svg" alt="favorite"/>}</Link>
                            </li>
                            <li>
                                <Link to="/profile"><img src="img/profile.svg" alt="profile"/></Link>
                            </li>
                        </ul>
                     </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;