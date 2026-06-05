import { useState } from "react";
import { Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../../css/cart.css";
import { formatPrice } from "../../utils/formatPrice";
import {DELETE_CONFIRMATION_DURATION, CART_VIEW_TEXTS, ROUTES } from "../../constants/index"
import Swal from "sweetalert2"

    const CartView = ({cart,total,clear,removeItem,incrementItem,decrementItem,}) => {

    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const preConfirm = ()=>{
        Swal.fire({
            title: "estas seguro de borrar el carrito",
            text: "se perderan todos los datos",
            icon: "question",
            showCancelButton: true,
            cancelButtonText: "no",
            confirmButtonText: "si"
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }
        })
    }

    const handleDecrease = (product) => {

        if (product.quantity === 1) {
        setConfirmDeleteId(product.id);

        setTimeout(() => {
            setConfirmDeleteId(null);
        }, DELETE_CONFIRMATION_DURATION);

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
            <h1>{CART_VIEW_TEXTS.TITLE}</h1>

            <button
            className="clear-cart-btn"
            onClick={preConfirm}
            >
            {CART_VIEW_TEXTS.CLEAR_CART}
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
                        }, DELETE_CONFIRMATION_DURATION);
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
            <h2>{CART_VIEW_TEXTS.RESUMEN}</h2>

            <div className="summary-row">
                <span>{CART_VIEW_TEXTS.TOTAL}</span>

                <strong>
                ${formatPrice(total)}
                </strong>
            </div>

            <Link
                to={ROUTES.CHECKOUT}
                className="checkout-btn"
            >
                {CART_VIEW_TEXTS.FINISH_PURCHASE}
            </Link>

            <Link
                to={ROUTES.HOME}
                className="continue-shopping"
            >
                {CART_VIEW_TEXTS.CONTINUE_SHOPPING}
            </Link>
            </aside>
        </div>
        </section>
    );
};

export default CartView;