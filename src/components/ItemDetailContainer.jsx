import { useEffect, useState } from "react";
import { getProduct} from "../data/products";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    // sacar funcion getproducts de aca 



    useEffect(() => {

        getProduct(id)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    if (loading) {
        return <h2>Cargando producto...</h2>;
    }

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}