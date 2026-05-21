import { useContext } from "react";

import { CartContext } from "../contex/CartContex";

import CartView from "./CartView";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    const { cart, total, clear, removeItem, } = useContext(CartContext);

    return (
        <>
        {cart.length > 0 ? (
            <CartView
            cart={cart}
            total={total()}
            clear={clear}
            removeItem={removeItem}
            />
        ) : (
            <EmptyCart />
        )}
        </>
    );
};

export default CartContainer;