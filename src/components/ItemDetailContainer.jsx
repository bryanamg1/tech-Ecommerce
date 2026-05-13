import { useEffect, useState } from "react";
import { getProduct } from "../data/products";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        getProduct(id)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.error(error);
                setProduct(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    return (
        <section className="item-detail-container">

            {loading ? (
                <Loader text="Cargando producto..." />
            ) : product ? (
                <ItemDetail product={product} />
            ) : (
                <h2>Producto no encontrado</h2>
            )}

        </section>
    );
}

export default ItemDetailContainer