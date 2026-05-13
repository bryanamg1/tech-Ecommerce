import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Productos destacados");

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts(category)
            .then((response) => {
                setItems(response);

                setTitle(
                    category ? category : "Productos destacados"
                );
            })
            .catch((error) => {
                console.error(error);
                setItems([]);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [category]);

    return (
        <section className="item-list-container">

            {loading ? (
                <Loader text="Cargando productos..." />
            ) : (
                <>
                    <h2 className="section-title">
                        {title}
                    </h2>

                    <ItemList products={items} />
                </>
            )}

        </section>
    );
};

export default ItemListContainer;