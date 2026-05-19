import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../data/products";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Productos destacados");

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
            setTitle("Productos destacados");
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
            <Loader text="Cargando productos..." />
        ) : (
            <>
            <h2 className="section-title">{title}</h2>

            {items.length > 0 ? (
                <ItemList products={items} />
            ) : (
                <p>No hay productos disponibles para esta categoría.</p>
            )}
            </>
        )}
        </section>
    );
};

export default ItemListContainer;