import {Link} from 'react-router-dom'

function Item({ product }) {
    return (
        <article className="item-card">
        <img src={product.image} alt={product.name} className="item-image" />

        <div className="item-info">
            <span className="item-category">{product.category}</span>
            <h3 className="item-title">{product.name}</h3>
            <p className="item-price">${product.price}</p>
            <p className="item-stock">Stock disponible: {product.stock}</p>

            <Link className="item-button" to={"/item/" + product.id}>ver detalle</Link>
        </div>
        </article>
    );
}

export default Item;