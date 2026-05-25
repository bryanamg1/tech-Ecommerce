import {Link} from 'react-router-dom'
import {formatPrice} from "../../utils/formatPrice"
import {ITEM_TEXTS, ROUTES} from "../../constants/index"

function Item({ product }) {
    return (
        <article className="item-card">
        <img src={product.image} alt={product.name} className="item-image" />

        <div className="item-info">
            <span className="item-category">{product.category}</span>
            <h3 className="item-title">{product.name}</h3>
            <p className="item-price">${formatPrice(product.price)}</p>
            <p className="item-stock">{ITEM_TEXTS.STOCK} {product.stock}</p>

            <Link className="item-button" to={`${ROUTES.ITEM_DETAIL}/${product.id}`}>{ITEM_TEXTS.DETAIL_BUTTON}</Link>
        </div>
        </article>
    );
}

export default Item;