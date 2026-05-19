import { ItemCount } from "./ItemCount";
import "../css/itemDetail.css";

export function ItemDetail({ product }) {
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

            <h1 className="detail-title">{product.name}</h1>

            <p className="detail-description">
            {product.description}
            </p>

            <h3 className="detail-price">${product.price}</h3>

            <p className="detail-stock">
            Stock disponible: {product.stock}
            </p>

            <ItemCount stock={product.stock} />
        </div>
        </section>
    );
}