import { useState } from "react";

import { Trash2, X } from "lucide-react";

import { Link } from "react-router-dom";

import "../css/cart.css";

import { formatPrice } from "../utils/formatPrice";

    const CartView = ({
    cart,
    total,
    clear,
    removeItem,
    incrementItem,
    decrementItem,
    }) => {
    const [confirmDeleteId, setConfirmDeleteId] =
        useState(null);

    const handleDecrease = (product) => {
        // Si la cantidad es 1
        // activamos modo confirmación

        if (product.quantity === 1) {
        setConfirmDeleteId(product.id);

        setTimeout(() => {
            setConfirmDeleteId(null);
        }, 3000);

        return;
        }

        decrementItem(product.id);
    };

    const handleIncrease = (product) => {
        incrementItem(product.id);


        setConfirmDeleteId(null);
    };

    return (
        <section className="cart-container-page">
        <div className="cart-header">
            <h1>Tu carrito</h1>

            <button
            className="clear-cart-btn"
            onClick={clear}
            >
            Vaciar carrito
            </button>
        </div>

        <div className="cart-layout">
            <div className="cart-items">
            {cart.map((product) => {
                const isConfirming =
                confirmDeleteId === product.id;

                return (
                <article
                    className={`cart-item ${
                    isConfirming
                        ? "confirm-delete"
                        : ""
                    }`}
                    key={product.id}
                >
                    <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-image"
                    />

                    <div className="cart-item-info">
                    <span className="cart-item-category">
                        {product.category} /{" "}
                        {product.brand}
                    </span>

                    <h3>{product.name}</h3>

                    <div className="cart-quantity-controls">
                        <button
                        onClick={() =>
                            handleDecrease(product)
                        }
                        >
                        -
                        </button>

                        <span>
                        {product.quantity}
                        </span>

                        <button
                        onClick={() =>
                            handleIncrease(product)
                        }
                        disabled={
                            product.quantity >=
                            product.stock
                        }
                        >
                        +
                        </button>
                    </div>

                    <p className="cart-item-price">
                        $
                        {formatPrice(
                        product.price *
                            product.quantity
                        )}
                    </p>
                    </div>

                    <button
                    className="remove-item-btn"
                    onClick={() => {
                        if (isConfirming) {
                        removeItem(product.id);
                        } else {
                        setConfirmDeleteId(
                            product.id
                        );

                        setTimeout(() => {
                            setConfirmDeleteId(
                            null
                            );
                        }, 3000);
                        }
                    }}
                    >
                    {isConfirming ? (
                        <X size={46} />
                    ) : (
                        <Trash2 size={18} />
                    )}
                    </button>
                </article>
                );
            })}
            </div>

            <aside className="cart-summary">
            <h2>Resumen</h2>

            <div className="summary-row">
                <span>Total:</span>

                <strong>
                ${formatPrice(total)}
                </strong>
            </div>

            <button className="checkout-btn">
                Finalizar compra
            </button>

            <Link
                to="/"
                className="continue-shopping"
            >
                Seguir comprando
            </Link>
            </aside>
        </div>
        </section>
    );
};

export default CartView;