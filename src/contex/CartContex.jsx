import { createContext, useContext, useState } from "react";
import { NotificationContext } from "../contex/NotificationContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { showNotification } = useContext(NotificationContext);
    const [cart, setCart] = useState([]);


    //AGREGAR AL CARRITO
    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((prod) => {

                if (prod.id === item.id)
                    { return {...prod, quantity: prod.quantity + qty,};
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            showNotification("Producto actualizado en el carrito", "info");
        } else {
            setCart([...cart,{...item, quantity: qty,},]);
            showNotification("Producto agregado al carrito", "success");
        }
    };


    // VACIAR CARRITO
    const clear = () => {
        setCart([]);
        showNotification("Carrito vaciado", "error");
    };

    // ELIMINAR PRODUCTO
    const removeItem = (id) => {
        const filteredCart = cart.filter(
        (prod) => prod.id !== id
        );

        setCart(filteredCart);
        showNotification("Producto eliminado del carrito", "error");
    };

    // EXISTE EN CARRITO
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    // TOTAL $
    const total = () => {
        return cart.reduce( (acc, prod) => acc + (prod.quantity * prod.price), 0);
    };

    // TOTAL ITEMS
    const totalItems = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, total, totalItems }}>
        {children}
        </CartContext.Provider>
    );
};