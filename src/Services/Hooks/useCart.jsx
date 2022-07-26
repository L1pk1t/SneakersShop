import React from "react";
import AppContext from "../Contexts/AppContext";

export const useCart = () => {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const totalPrice = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0)

    return {cartItems, setCartItems, totalPrice}
}

