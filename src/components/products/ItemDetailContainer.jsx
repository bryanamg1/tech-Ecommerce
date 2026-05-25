import { useEffect, useState } from "react";
import { getProduct } from "../../data/products";
import { ItemDetail } from "../products/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import {ITEM_DETAIL_CONTAINER_TEXTS} from "../../constants/index"

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
                    <Loader text={ITEM_DETAIL_CONTAINER_TEXTS.LOADING} />
                ) : product ? (
                    <ItemDetail product={product} />
                ) : (
                    <h2>{ITEM_DETAIL_CONTAINER_TEXTS.PRODUCT_NOT_FOUND}</h2>
            )}

        </section>
    );
}

export default ItemDetailContainer