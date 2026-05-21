import { ItemCount } from "./ItemCount";

import "../css/itemDetail.css";

import { useContext, useState } from "react";

import { CartContext } from "../contex/CartContex";

import { Link } from "react-router-dom";

export function ItemDetail({ product }) {
    const { addItem } = useContext(CartContext);

    const [addedQuantity, setAddedQuantity] = useState(0);

    const handleAddToCart = (quantity) => {
        addItem(product, quantity);

        setAddedQuantity(quantity);
    };

    return (
        <section className="detail-container">
        <div className="detail-image-wrapper">
            <img
            src={product.image}
            alt={product.name}
            className="detail-image"
            />
        </div>

        <div className="detail-info">
            <span className="detail-category">
            {product.category} / {product.brand}
            </span>

            <h1 className="detail-title">
            {product.name}
            </h1>

            <p className="detail-description">
            {product.description}
            </p>

            <h3 className="detail-price">
            ${product.price}
            </h3>

            <p className="detail-stock">
            Stock disponible: {product.stock}
            </p>

            {addedQuantity > 0 ? (
            <div className="detail-actions">
                <Link
                to="/"
                className="continue-shopping-btn"
                >
                Seguir comprando
                </Link>

                <Link
                to="/cart"
                className="go-cart-btn"
                >
                Ir al carrito
                </Link>
            </div>
            ) : (
            <ItemCount
                stock={product.stock}
                onAdd={handleAddToCart}
            />
            )}
        </div>
        </section>
    );
}