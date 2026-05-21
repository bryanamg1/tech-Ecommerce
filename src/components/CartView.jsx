import { Link } from "react-router-dom";

import "../css/cart.css";

const CartView = ({cart, total, clear, removeItem,}) => {

    
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
            {cart.map((product) => (
                <article
                className="cart-item"
                key={product.id}
                >
                <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-image"
                />

                <div className="cart-item-info">
                    <span className="cart-item-category">
                    {product.category} / {product.brand}
                    </span>

                    <h3>{product.name}</h3>

                    <p>
                    Cantidad: {product.quantity}
                    </p>

                    <p className="cart-item-price">
                    $
                    {product.price *
                        product.quantity}
                    </p>
                </div>

                <button
                    className="remove-item-btn"
                    onClick={() =>
                    removeItem(product.id)
                    }
                >
                    ×
                </button>
                </article>
            ))}
            </div>

            <aside className="cart-summary">
            <h2>Resumen</h2>

            <div className="summary-row">
                <span>Total:</span>

                <strong>${total}</strong>
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