import { Link } from "react-router-dom";
import "../../css/cart.css";
import {EMPTY_CART_TEXTS, ROUTES} from "../../constants/index"

const EmptyCart = () => {
    return (
        <section className="empty-cart-container">
        <div className="empty-cart-card">
            <div className="empty-cart-icon">
            {EMPTY_CART_TEXTS.ICON}
            </div>

            <h1>{EMPTY_CART_TEXTS.TITLE}</h1>

            <p>
                {EMPTY_CART_TEXTS.DESCRIPTION}
            </p>

            <Link
            to={ROUTES.HOME}
            className="empty-cart-btn"
            >
            {EMPTY_CART_TEXTS.ACTION}
            </Link>
        </div>
        </section>
    );
};

export default EmptyCart;