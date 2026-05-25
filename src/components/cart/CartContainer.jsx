import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import CartView from "../cart/CartView";
import EmptyCart from "../cart/EmptyCart"

const CartContainer = () => {
    const { cart, total, clear, removeItem, incrementItem, decrementItem } = useContext(CartContext);

    return (
        <>
        {cart.length > 0 ? (
            <CartView
            cart={cart}
            total={total()}
            clear={clear}
            removeItem={removeItem}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            />
        ) : (
            <EmptyCart />
        )}
        </>
    );
};

export default CartContainer;