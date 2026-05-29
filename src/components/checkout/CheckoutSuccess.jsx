import { Link } from "react-router-dom";

import { CHECKOUT_TEXTS, ROUTES } from "../../constants";

const CheckoutSuccess = ({ orderId }) => {
    return (
        <section className="checkout-success">
        <div className="checkout-success-card">
            <h1>{CHECKOUT_TEXTS.SUCCESS_TITLE}</h1>

            <p>{CHECKOUT_TEXTS.SUCCESS_MESSAGE}</p>

            <strong>{orderId}</strong>

            <Link to={ROUTES.HOME}>
            {CHECKOUT_TEXTS.BACK_HOME}
            </Link>
        </div>
        </section>
    );
};

export default CheckoutSuccess;