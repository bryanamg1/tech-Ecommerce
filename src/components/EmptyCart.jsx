import { Link } from "react-router-dom";

import "../css/cart.css";

const EmptyCart = () => {
    return (
        <section className="empty-cart-container">
        <div className="empty-cart-card">
            <div className="empty-cart-icon">
            🛒
            </div>

            <h1>Tu carrito está vacío</h1>

            <p>
            Parece que todavía no agregaste
            productos.
            </p>

            <Link
            to="/"
            className="empty-cart-btn"
            >
            Explorar productos
            </Link>
        </div>
        </section>
    );
};

export default EmptyCart;