import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products";
import ItemList from "../products/ItemList";
import Loader from "../ui/Loader";
import {ITEM_LIST_CONTAINER_TEXTS} from "../../constants/index"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(ITEM_LIST_CONTAINER_TEXTS.FEATURED_PRODUCTS);

    const { category, brand } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts(category, brand)
        .then((response) => {
            setItems(response);

            if (category && brand) {
            setTitle(`${category} - ${brand}`);
            } else if (category) {
            setTitle(category);
            } else {
            setTitle(ITEM_LIST_CONTAINER_TEXTS.FEATURED_PRODUCTS);
            }
        })
        .catch((error) => {
            console.error(error);
            setItems([]);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [category, brand]);

    return (
        <section className="item-list-container">
        {loading ? (
            <Loader text={ITEM_LIST_CONTAINER_TEXTS.LOADING} />
        ) : (
            <>
            <h2 className="section-title">{title}</h2>

            {items.length > 0 ? (
                <ItemList products={items} />
            ) : (
                <p>{ITEM_LIST_CONTAINER_TEXTS.EMPTY_CATEGORY}</p>
            )}
            </>
        )}
        </section>
    );
};

export default ItemListContainer;