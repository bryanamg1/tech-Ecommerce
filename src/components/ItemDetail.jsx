import { ItemCount } from "./ItemCount";
import "../css/itemDetail.css";

export function ItemDetail({ product }) {
    


    return (
        <section className="detail-container">
        <img
            src={product.image}
            alt={product.title}
            className="detail-image"
        />

        <div className="detail-info">
            <h2>{product.title}</h2>

            <p className="detail-description">
            {product.description}
            </p>

            <h3>${product.price}</h3>

            <p className="detail-stock">
            Stock disponible: {product.stock}
            </p>

            <ItemCount stock={product.stock} />
        </div>
        </section>
    );
}