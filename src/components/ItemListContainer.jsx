import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer= ()=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {

        getProducts(category)
            .then((response) => {
                setItems(response);
            })
            .catch((error) => {
                console.error(error);
                setItems([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <h2>Cargando productos...</h2>;
    }

    return (
        <section className="item-list-container">
            <h2 className="section-title">
                {category ? category : "Productos destacados"}
            </h2>

            <ItemList products={items} />
        </section>
    );
}

export default ItemListContainer