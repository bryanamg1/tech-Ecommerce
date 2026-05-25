import { createContext, useContext, useState } from "react";
import { NotificationContext } from "../context/NotificationContext";
import {NOTIFICATIONS} from "../constants/index"
import { addItemToCart, removeItemFromCart, incrementCartItem, decrementCartItem, checkIsInCart, calculateTotal, calculateTotalItems,} from "../utils/cartUtils";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { showNotification } = useContext(NotificationContext);
    const [cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        const productExists = checkIsInCart(cart, item.id);

        const updatedCart = addItemToCart(cart, item, qty);

        setCart(updatedCart);

        if (productExists) {
        showNotification(NOTIFICATIONS.PRODUCT_UPDATED.message, NOTIFICATIONS.PRODUCT_UPDATED.type);
        } else {
        showNotification(NOTIFICATIONS.PRODUCT_ADDED.message, NOTIFICATIONS.PRODUCT_ADDED.type);
        }
    };

    const clear = () => {
        setCart([]);
        showNotification(NOTIFICATIONS.CART_CLEARED.message, NOTIFICATIONS.CART_CLEARED.type);
    };

    const removeItem = (id) => {
        setCart(removeItemFromCart(cart, id));
        showNotification(NOTIFICATIONS.PRODUCT_REMOVED.message, NOTIFICATIONS.PRODUCT_REMOVED.type);
    };

    const incrementItem = (id) => {
        setCart(incrementCartItem(cart, id));
    };

    const decrementItem = (id) => {
        setCart(decrementCartItem(cart, id));
    };

    const isInCart = (id) => {
        return checkIsInCart(cart, id);
    };

    const total = () => {
        return calculateTotal(cart);
    };

    const totalItems = () => {
        return calculateTotalItems(cart);
    };

    return (
        <CartContext.Provider
        value={{
            cart,
            addItem,
            clear,
            removeItem,
            isInCart,
            total,
            totalItems,
            incrementItem,
            decrementItem,
        }}
        >
        {children}
        </CartContext.Provider>
    );
};