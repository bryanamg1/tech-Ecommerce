import { ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../contex/CartContex";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart-container">
        <ShoppingCart size={24} color="white" />

        <span className="cart-badge">
            {totalItems()}
        </span>
        </Link>
    );
};

export default CartWidget;