import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutSuccess from "./CheckoutSuccess";
import EmptyCart from "../cart/EmptyCart";
import { createOrder } from "../../data/orders";
import "../../css/checkout.css";

const CheckoutContainer = () => {
    const { cart, total, clear } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);


    if (cart.length === 0 && !orderId) {
        return <EmptyCart />;
    }


    const handleCreateOrder = async (
        buyerData
    ) => {
        setLoading(true);

        try {
        const order = {
            buyer: buyerData,
            items: cart.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
            })),

            total: total(),
        };

        const createdOrderId = await createOrder(order);
        setOrderId(createdOrderId);
        clear();
        } catch (error) {
        console.error("Error al crear la orden:", error);
        } finally {
        setLoading(false);
        }
    };

    /* SUCCESS */

    if (orderId) {
        return (
        <CheckoutSuccess
            orderId={orderId}
        />
        );
    }

    return (
        <section className="checkout-container">
        <CheckoutForm
            onCreateOrder={handleCreateOrder}
            loading={loading}
        />

        <CheckoutSummary
            cart={cart}
            total={total()}
        />
        </section>
    );
};

export default CheckoutContainer;