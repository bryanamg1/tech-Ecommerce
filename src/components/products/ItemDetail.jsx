import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../products/ItemCount";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import {ITEM_DETAIL_TEXTS,ROUTES,} from "../../constants";
import "../../css/itemDetail.css";



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
            ${formatPrice(product.price)}
            </h3>

            <p className="detail-stock">
            {ITEM_DETAIL_TEXTS.STOCK} {product.stock}
            </p>

            {addedQuantity > 0 ? (
            <div className="detail-actions">
                <Link
                to={ROUTES.HOME}
                className="continue-shopping-btn"
                >
                {ITEM_DETAIL_TEXTS.CONTINUE_SHOPPING}
                </Link>

                <Link
                to={ROUTES.CART}
                className="go-cart-btn"
                >
                {ITEM_DETAIL_TEXTS.GO_TO_CART}
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