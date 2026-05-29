import { useState } from "react";

import { CHECKOUT_TEXTS } from "../../constants";

import { validateCheckoutForm } from "../../utils/chechoutValidations";

const CheckoutForm = ({ onCreateOrder, loading }) => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setBuyer({
        ...buyer,
        [name]: value,
        });

        setErrors({
        ...errors,
        [name]: "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formErrors = validateCheckoutForm(buyer);

        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
        return;
        }

        onCreateOrder(buyer);
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
        <h1>{CHECKOUT_TEXTS.TITLE}</h1>

        <label>
            {CHECKOUT_TEXTS.NAME}

            <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            />

            {errors.name && (
            <span className="checkout-error">
                {errors.name}
            </span>
            )}
        </label>

        <label>
            {CHECKOUT_TEXTS.EMAIL}

            <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            />

            {errors.email && (
            <span className="checkout-error">
                {errors.email}
            </span>
            )}
        </label>

        <label>
            {CHECKOUT_TEXTS.REPEAT_EMAIL}

            <input
            type="email"
            name="confirmEmail"
            value={buyer.confirmEmail}
            onChange={handleChange}
            />

            {errors.confirmEmail && (
            <span className="checkout-error">
                {errors.confirmEmail}
            </span>
            )}
        </label>

        <label>
            {CHECKOUT_TEXTS.PHONE}

            <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            />

            {errors.phone && (
            <span className="checkout-error">
                {errors.phone}
            </span>
            )}
        </label>

        <button type="submit" disabled={loading}>
            {loading
            ? "Generando orden..."
            : CHECKOUT_TEXTS.SUBMIT}
        </button>
        </form>
    );
};

export default CheckoutForm;