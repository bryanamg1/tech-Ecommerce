import { formatPrice } from "../../utils/formatPrice";

import { CHECKOUT_TEXTS } from "../../constants";

const CheckoutSummary = ({ cart, total }) => {
    return (
        <aside className="checkout-summary">
        <h2>{CHECKOUT_TEXTS.SUMMARY}</h2>

        {cart.map((product) => (
            <div className="checkout-product" key={product.id}>
            <span>{product.name}</span>

            <strong>x{product.quantity}</strong>
            </div>
        ))}

        <div className="checkout-total">
            <span>Total</span>

            <strong>${formatPrice(total)}</strong>
        </div>
        </aside>
    );
};

export default CheckoutSummary;